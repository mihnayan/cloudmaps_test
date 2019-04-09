
const onlineUsers = {}

module.exports = {

    setUserOnline: function (userId) {
        onlineUsers[userId] = '';
        sails.sockets.blast('user_online', userId);
    },

    setUserOffline: function (userId) {
        delete onlineUsers[userId];
        sails.sockets.blast('user_offline', userId);
    },

    isUserOnline: function (userId) {
        return onlineUsers.hasOwnProperty(userId);
    }
}