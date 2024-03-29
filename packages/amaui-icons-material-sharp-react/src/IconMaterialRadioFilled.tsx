import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRadioFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioFilled'

      short_name='Radio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V6.65L15.9 1l.65 1.65L8.3 6H22v16Zm2-11h12V9h2v2h2V8H4Zm4 8q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q9.05 14 8 14q-1.05 0-1.775.725Q5.5 15.45 5.5 16.5q0 1.05.725 1.775Q6.95 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialRadioFilled.displayName = 'AmauiIconMaterialRadioFilled';

export default IconMaterialRadioFilled;
