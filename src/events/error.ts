import ClientEvent from "@util/ClientEvent";
import Logger from "@util/Logger";
import ErrorHandler from "@handlers/ErrorHandler";

export default new ClientEvent("error", async function(info, id) {
	Logger.getLogger(id === undefined ? undefined : `Shard #${id}`).error(info);
	const code = await ErrorHandler.handleError(info, "event");
	Logger.getLogger(id === undefined ? undefined : `Shard #${id}`).error("Error Code:", code === null ? "Not Saved" : code);
});