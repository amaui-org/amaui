import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStarRateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StarRateW100Filled'

      short_name='StarRate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.7-2.825 2.15q-.125.075-.237.063-.113-.013-.213-.063-.1-.05-.15-.162-.05-.113 0-.238L9.65 13.9 7 11.975q-.125-.075-.162-.188-.038-.112.012-.237.05-.125.138-.188.087-.062.212-.062h3.35l1.1-3.6q.05-.125.138-.2.087-.075.212-.075t.213.075q.087.075.137.2l1.1 3.6h3.35q.125 0 .213.062.087.063.137.188.05.125.013.237-.038.113-.163.188L14.35 13.9l1.075 3.55q.05.125 0 .238-.05.112-.15.162-.1.05-.213.063-.112.012-.237-.063Z"/>
    </Icon>
  );
});

IconMaterialStarRateW100Filled.displayName = 'AmauiIconMaterialStarRateW100Filled';

export default IconMaterialStarRateW100Filled;
