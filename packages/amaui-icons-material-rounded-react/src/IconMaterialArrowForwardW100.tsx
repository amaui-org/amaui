import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowForwardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardW100'

      short_name='ArrowForward'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.75 18.75q-.125-.125-.125-.25t.125-.25l5.9-5.9H5.35q-.15 0-.25-.1T5 12q0-.15.1-.25t.25-.1h12.3l-5.9-5.9q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l6.225 6.225q.125.125.175.25.05.125.05.275 0 .125-.05.262-.05.138-.175.263L12.25 18.75q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialArrowForwardW100.displayName = 'AmauiIconMaterialArrowForwardW100';

export default IconMaterialArrowForwardW100;
