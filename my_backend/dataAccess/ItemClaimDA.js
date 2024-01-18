import ItemClaim from "../entity/ItemClaim";
import User from "../entity/User";
import Item from "../entity/Item";

async function getItemClaims() {
    return await ItemClaim.findAll({ include: ['Sender', 'Receiver', 'Item'] });
}

async function getItemClaimById(id) {
    return await ItemClaim.findByPk(id, { include: ['Sender', 'Receiver', 'Item'] });
}

async function createItemClaim(itemClaim) {
    try {
        const senderExists = await User.findByPk(itemClaim.sender_id);
        const receiverExists = await User.findByPk(itemClaim.receiver_id);
        const itemExists = await Item.findByPk(itemClaim.item_id);

        if (!senderExists || !receiverExists || !itemExists) {
            return { error: true, msg: "Invalid sender, receiver, or item ID" };
        }

        let createdItemClaim = await ItemClaim.create(itemClaim);
        return { error: false, msg: "ItemClaim created successfully", obj: createdItemClaim };
    } catch (error) {
        console.error('Error during item claim creation:', error);
        return { error: true, msg: "Error creating item claim" };
    }
}

async function deleteItemClaim(id) {
    let itemClaim = await ItemClaim.findByPk(id);
    return await itemClaim.destroy();
}

export{
    getItemClaims,
    getItemClaimById,
    createItemClaim,
    deleteItemClaim
}