import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAttachMoneyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachMoneyFilled'

      short_name='AttachMoney'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.025 21v-2.15q-1.325-.3-2.287-1.15-.963-.85-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825.737.625 1.937.625 1.025 0 1.738-.462.712-.463.712-1.438 0-.875-.55-1.388-.55-.512-2.55-1.162-2.15-.675-2.95-1.612-.8-.938-.8-2.288 0-1.625 1.05-2.525 1.05-.9 2.15-1.025V3h2v2.1q1.25.2 2.063.912.812.713 1.187 1.738l-1.85.8q-.3-.8-.85-1.2-.55-.4-1.5-.4-1.1 0-1.675.488-.575.487-.575 1.212 0 .825.75 1.3.75.475 2.6 1 1.725.5 2.613 1.587.887 1.088.887 2.513 0 1.775-1.05 2.7-1.05.925-2.6 1.15V21Z"/>
    </Icon>
  );
});

IconMaterialAttachMoneyFilled.displayName = 'AmauiIconMaterialAttachMoneyFilled';

export default IconMaterialAttachMoneyFilled;
