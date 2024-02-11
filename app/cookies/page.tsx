import React from 'react';

const CookiesPage = () => {
    return (
        <div className="m-14 p-4 text-black border-rose-400 border-2 rounded-lg shadow-2xl">
            <h1 className="text-center text-2xl font-bold mb-4">Cookies Policy for BarterLev</h1>
            <p className="mb-4">This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies when using our website and mobile application.</p>
            <h2 className="text-lg font-bold mt-4">What are cookies?</h2>
            <p className="mb-4">Cookies are small text files that are stored on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember information about your visit, such as your preferences and settings.</p>
            <h2 className="text-lg font-bold mt-4">How do we use cookies?</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc list-inside mb-4">
                <li>To provide and improve our services, including enhancing user experience and personalizing content.</li>
                <li>To analyze trends and usage patterns, and to monitor the performance and effectiveness of our website and mobile application.</li>
                <li>To track and measure advertising campaigns and to deliver targeted advertisements to users.</li>
            </ul>
            <h2 className="text-lg font-bold mt-4">Your choices regarding cookies</h2>
            <p className="mb-4">You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of our website and mobile application.</p>
            <h2 className="text-lg font-bold mt-4">Changes to this Cookies Policy</h2>
            <p className="mb-4">We may update this Cookies Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes to this policy by posting the updated version on our website or mobile application.</p>
            <h2 className="text-lg font-bold mt-4">Contact Us</h2>
            <p className="mb-4">If you have any questions or concerns about this Cookies Policy or our use of cookies, please contact us at <a href="mailto:contact@barterlev.com">contact@barterlev.com</a>.</p>
        </div>
    )
}

export default CookiesPage;
