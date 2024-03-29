import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlumbingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlumbingFilled'

      short_name='Plumbing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.275 9.175 15.75 5.65l-2.125 2.1-2.125-2.1 2.825-2.85q.3-.3.675-.438.375-.137.75-.137.4 0 .763.137.362.138.637.438l2.125 2.125q.45.425.663.987.212.563.212 1.138t-.212 1.125q-.213.55-.663 1ZM5.5 13.775q-.45-.45-.45-1.063 0-.612.45-1.062l2.45-2.475 2.125 2.125L7.6 13.775q-.425.45-1.038.45-.612 0-1.062-.45ZM4.425 21.2q-.275-.3-.425-.662-.15-.363-.15-.763T4 19q.15-.375.425-.65L11.5 11.3 8.325 8.1q-.45-.425-.45-1.038 0-.612.45-1.062.425-.45 1.05-.45T10.45 6l3.175 3.175L15.05 7.75l2.8 2.85q.3.3.3.7 0 .4-.3.7-.3.3-.7.3-.4 0-.7-.3l-9.2 9.2q-.275.275-.637.425-.363.15-.763.15-.375 0-.75-.15t-.675-.425Z"/>
    </Icon>
  );
});

IconMaterialPlumbingFilled.displayName = 'AmauiIconMaterialPlumbingFilled';

export default IconMaterialPlumbingFilled;
