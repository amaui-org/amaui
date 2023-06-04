import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncrease'

      short_name='TextIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M1.99,19h2.42l1.27-3.58h5.65L12.59,19h2.42L9.75,5h-2.5L1.99,19z M6.41,13.39L8.44,7.6h0.12l2.03,5.79H6.41z M20,11h3v2h-3 v3h-2v-3h-3v-2h3V8h2V11z"/>
    </Icon>
  );
});

IconMaterialTextIncrease.displayName = 'AmauiIconMaterialTextIncrease';

export default IconMaterialTextIncrease;
