import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBadgeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeW100'

      short_name='Badge'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 13.5h4v-.7h-4Zm0 2.2h4V15h-4Zm-.3-7.4h7v12.4H3.3V8.3h7v-5h3.4ZM11 9h2V4h-2Zm1 5.5ZM9 15q.45 0 .775-.325t.325-.775q0-.45-.325-.775T9 12.8q-.45 0-.775.325T7.9 13.9q0 .45.325.775T9 15Zm-2.6 2.25h5.2v-.05q0-.325-.175-.587-.175-.263-.475-.413-.475-.2-.962-.3-.488-.1-.988-.1t-.988.1q-.487.1-.962.3-.3.15-.475.413-.175.262-.175.587ZM10.3 9H4v11h16V9h-6.3v.7h-3.4Z"/>
    </Icon>
  );
});

IconMaterialBadgeW100.displayName = 'AmauiIconMaterialBadgeW100';

export default IconMaterialBadgeW100;
