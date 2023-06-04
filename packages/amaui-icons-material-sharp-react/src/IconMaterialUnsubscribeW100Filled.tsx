import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UnsubscribeW100Filled'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 21.7q-1.55 0-2.625-1.075T15.3 18q0-1.55 1.075-2.625T19 14.3q1.55 0 2.625 1.075T22.7 18q0 1.55-1.075 2.625T19 21.7Zm-2.15-3.35h4.3v-.7h-4.3ZM12 11.85l8-5.275L19.6 6 12 11 4.4 6l-.4.575ZM3.3 18.7V5.3h17.4v7.25q-.425-.125-.85-.188-.425-.062-.85-.062-1.175 0-2.212.45-1.038.45-1.813 1.225-.775.775-1.225 1.812-.45 1.038-.45 2.213v.35q0 .15.05.35Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribeW100Filled.displayName = 'AmauiIconMaterialUnsubscribeW100Filled';

export default IconMaterialUnsubscribeW100Filled;
