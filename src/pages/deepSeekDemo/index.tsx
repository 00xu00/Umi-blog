import React, { useEffect, useRef, useState } from "react";
import OpenAI from "openai";
import './index.less'

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: 'sk-5f78d3285de94112bef7f769e50cb97f',
    dangerouslyAllowBrowser: true,
})

const Page: React.FC = () => {

    const [result, setResult] = useState<string | null>('你好,这里是deepSeek');
    const myRef = useRef(null);

    const handle = (event: any) => {
        event.preventDefault();
        let formData = null;
        if (myRef.current) {
            formData = new FormData(myRef.current)
        }
        const content = formData?.get("content") as string;
        const model = formData?.get("model") as string;
        if (content) {
            setResult("加载中...")
            chat(content, model);
        } else {
            setResult("请输入对话内容")
        }
    }

    async function chat(content: string, model: string) {
        if (openai) {

            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content }],
                model: model,
            });

            setResult(completion.choices[0].message.content);
        }
    }


    return (<div>
        <div>
            <form ref={myRef}>
                <select name="model" id="model-select">
                    <option value="deepseek-chat">DeepSeek-V3</option>
                    <option value="deepseek-reasoner">DeepSeek-R1</option>
                </select>
                <input
                    type="text"
                    placeholder="请输入对话内容"
                    id="content"
                    name="content"
                />
                <button type="submit" onClick={handle} className="buttonCss">发送</button>
            </form>
        </div>
        <div dangerouslySetInnerHTML={{ __html: result as string }} />
    </div>
    )
}

export default Page;