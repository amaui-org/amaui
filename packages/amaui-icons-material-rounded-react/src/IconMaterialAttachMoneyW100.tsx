import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachMoneyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneyW100'

      short_name='AttachMoney'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 20.35q-.15 0-.25-.1t-.1-.25v-1.65q-1.2-.125-2.063-.725-.862-.6-1.362-1.65-.05-.125.013-.275.062-.15.187-.2.125-.05.275 0 .15.05.2.175.45.95 1.187 1.462.738.513 1.963.513 1.175 0 2.188-.6 1.012-.6 1.012-1.95 0-1.125-.737-1.813Q13.75 12.6 11.875 12 10 11.4 9.213 10.65q-.788-.75-.788-2 0-1.325 1.075-2.138 1.075-.812 2.125-.862V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65q.875.075 1.563.412.687.338 1.187 1.013.075.125.05.25-.025.125-.15.2-.125.075-.262.05-.138-.025-.238-.15-.4-.5-.987-.812Q12.9 6.3 12.025 6.3q-1.175 0-2.037.65-.863.65-.863 1.7 0 .95.625 1.55.625.6 2.625 1.25 1.85.6 2.7 1.45.85.85.85 2.2 0 1.425-1.062 2.3-1.063.875-2.538.95V20q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneyW100.displayName = 'AmauiIconMaterialAttachMoneyW100';

export default IconMaterialAttachMoneyW100;
