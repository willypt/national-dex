import AppDispatcher from '../dispatcher/AppDispatcher';

const ActionsHelper = {
	dispatch: function(actionType, data) {
		AppDispatcher.handleAction({
			actionType : actionType,
			data: data
		});
	}
};

export default ActionsHelper;