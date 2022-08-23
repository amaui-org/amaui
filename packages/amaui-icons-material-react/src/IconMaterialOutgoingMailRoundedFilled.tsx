import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutgoingMailRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutgoingMailRoundedFilled'
      short_name='OutgoingMail'

      {...props}
    >
      <path d="M19 21 17.6 19.6 19.175 18H15V16H19.175L17.6 14.4L19 13L23 17ZM4 19Q3.175 19 2.588 18.413Q2 17.825 2 17V7Q2 6.175 2.588 5.588Q3.175 5 4 5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V11H17V8.4L10.4 13L4 8.425V17Q4 17 4 17Q4 17 4 17H13V19ZM5.45 7 10.4 10.55 15.5 7Z"/>
    </Icon>
  );
});

IconMaterialOutgoingMailRoundedFilled.displayName = 'AmauiIconMaterialOutgoingMailRoundedFilled';

export default IconMaterialOutgoingMailRoundedFilled;
