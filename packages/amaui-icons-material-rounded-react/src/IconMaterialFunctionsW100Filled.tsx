import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunctionsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunctionsW100Filled'

      short_name='Functions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.85 18.85q-.25 0-.425-.175t-.175-.425q0-.125.062-.3.063-.175.163-.275L13.15 12 7.475 6.325q-.1-.1-.163-.263Q7.25 5.9 7.25 5.75q0-.25.175-.425t.425-.175h8.55q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8l5.65 5.65q.1.1.15.238.05.137.05.262t-.05.262q-.05.138-.15.238L8 18.15h8.4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFunctionsW100Filled.displayName = 'AmauiIconMaterialFunctionsW100Filled';

export default IconMaterialFunctionsW100Filled;
