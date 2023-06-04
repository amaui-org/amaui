import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingW100Filled'

      short_name='PhonelinkRing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.3 16.15q-.1-.1-.1-.237 0-.138.1-.263.65-.75 1-1.7t.35-1.95q0-1-.35-1.95t-1-1.7q-.1-.125-.112-.25-.013-.125.112-.25t.262-.125q.138 0 .238.125.775.875 1.163 1.937.387 1.063.387 2.213 0 1.15-.387 2.212-.388 1.063-1.163 1.938-.1.125-.238.125-.137 0-.262-.125Zm-2.05-2.05q-.1-.1-.112-.225-.013-.125.112-.25.325-.35.525-.763.2-.412.2-.862t-.2-.863q-.2-.412-.525-.762-.125-.125-.112-.25.012-.125.112-.225.125-.125.263-.113.137.013.237.113.425.425.675.962.25.538.25 1.138 0 .6-.25 1.137-.25.538-.675.963-.1.1-.237.112-.138.013-.263-.112ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v3.1H17V5.35H7v13.3h10V17.1h.7v3.1q0 .625-.438 1.062-.437.438-1.062.438Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingW100Filled.displayName = 'AmauiIconMaterialPhonelinkRingW100Filled';

export default IconMaterialPhonelinkRingW100Filled;
