export const deliverMessage = async (message: string) => {
    // 1.5秒後に返す
    await new Promise((res) => setTimeout(res, 1500));

    return message;
};
