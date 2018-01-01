import {connect} from 'react-redux';

import {getCurrentTeam} from 'mattermost-redux/selectors/entities/teams';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import InviteMemberModal from './invite_member_modal';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        currentTeam: getCurrentTeam(state),
        currentUser: getCurrentUser(state)
    };
}

export default connect(mapStateToProps)(InviteMemberModal);