import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodyFatFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFatFilled'

      short_name='BodyFat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 16h-1v6.2L-.5 12.025 20 1.8V8h1v2h-4V8h1V5.075L13.6 7.25q.675 1.075 1.037 2.275Q15 10.725 15 12q0 1.275-.363 2.5-.362 1.225-1.062 2.3l4.4 2.175V16H17v-2h4Zm-9.25-.125q.6-.85.925-1.838Q13 13.05 13 12q0-1.05-.325-2.013-.325-.962-.9-1.837L4 12Z"/>
    </Icon>
  );
});

IconMaterialBodyFatFilled.displayName = 'AmauiIconMaterialBodyFatFilled';

export default IconMaterialBodyFatFilled;
