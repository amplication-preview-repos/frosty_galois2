import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FollowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Follower" source="follower" />
        <TextInput label="Following" source="following" />
      </SimpleForm>
    </Edit>
  );
};
