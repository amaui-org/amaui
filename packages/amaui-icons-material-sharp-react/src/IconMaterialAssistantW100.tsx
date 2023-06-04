import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantW100'

      short_name='Assistant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H4.3V3.3h15.4v15.4h-5.25ZM5 18h4.85L12 20.15 14.15 18H19V4H5ZM5 4v14Zm8.075 8.075L15.4 11l-2.325-1.075L12 7.6l-1.075 2.325L8.6 11l2.325 1.075L12 14.4Z"/>
    </Icon>
  );
});

IconMaterialAssistantW100.displayName = 'AmauiIconMaterialAssistantW100';

export default IconMaterialAssistantW100;
