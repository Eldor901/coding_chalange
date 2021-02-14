

const publishItems = async () => {
    return new Promise((reject) => {
        const publishItems = async () => {
            const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];
            itemsToPublish.forEach(async item => {
                try {
                    await asyncPublisher.publish(item);
                }catch (e)
                {
                    reject(e)
                }
            });
        };

        publishItems().catch(e => {
            throw new Error("Failed to publish items!");
        });
    });
}

publishItems().catch(e => {
    throw new Error("Failed to publish items!");
});


/*as publish makes async operation. In order to catch error we have to wait answer of publisher for that we should use promise
in case of error answer of publish we will catch it
*/