import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationMultipleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleW100'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-166q-26 0-43-17t-17-43v-414q0-6 4-10t10-4q6 0 10 4t4 10v414q0 14 9 23t23 9h476q6 0 10 4t4 10q0 6-4 10t-10 4H178Zm341-297L254-618v284q0 14 9 23t23 9h496q14 0 23-9t9-23v-284L549-463q-7 4-15 4t-15-4ZM286-274q-26 0-43-17t-17-43v-298q0-14 5-23t19-17l284-166 65 38-20 20-45-26-272 160 272 160 272-160-59-36 20-20 51 30q14 8 19 17t5 23v298q0 26-17 43t-43 17H286Zm238-338 176-176q4-4 9.5-4.5T720-788q5 5 5 10t-5 10L545-593q-9 9-21 9t-21-9l-45-45q-4-4-4.5-9.5T458-658q5-5 10-5t10 5l46 46Zm10 310h280-560 280Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleW100.displayName = 'AmauiIconMaterialNotificationMultipleW100';

export default IconMaterialNotificationMultipleW100;
