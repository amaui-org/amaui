import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkEraseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkEraseW100Filled'

      short_name='PhonelinkErase'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 14.85q-.125-.125-.125-.25t.125-.25L15.85 12 13.5 9.65q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125l2.35 2.35 2.35-2.35q.1-.1.238-.113.137-.012.262.113t.125.25q0 .125-.125.25L16.85 12l2.35 2.35q.1.1.112.237.013.138-.112.263t-.25.125q-.125 0-.25-.125l-2.35-2.35L14 14.85q-.1.1-.238.112-.137.013-.262-.112ZM6.8 21.7q-.625 0-1.062-.438Q5.3 20.825 5.3 20.2V3.8q0-.625.438-1.063Q6.175 2.3 6.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H16V5.35H6v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkEraseW100Filled.displayName = 'AmauiIconMaterialPhonelinkEraseW100Filled';

export default IconMaterialPhonelinkEraseW100Filled;
