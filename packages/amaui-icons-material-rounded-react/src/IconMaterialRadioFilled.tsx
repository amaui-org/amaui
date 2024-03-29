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
      <path d="M4 22q-.825 0-1.412-.587Q2 20.825 2 20V8q0-.625.338-1.125.337-.5.912-.725l11.825-4.825q.35-.125.688.012.337.138.462.488t-.013.687q-.137.338-.487.463L8.3 6H20q.825 0 1.413.588Q22 7.175 22 8v12q0 .825-.587 1.413Q20.825 22 20 22Zm0-11h12v-1q0-.425.288-.713Q16.575 9 17 9t.712.287Q18 9.575 18 10v1h2V8H4Zm4 8q1.05 0 1.775-.725.725-.725.725-1.775 0-1.05-.725-1.775Q9.05 14 8 14q-1.05 0-1.775.725Q5.5 15.45 5.5 16.5q0 1.05.725 1.775Q6.95 19 8 19Z"/>
    </Icon>
  );
});

IconMaterialRadioFilled.displayName = 'AmauiIconMaterialRadioFilled';

export default IconMaterialRadioFilled;
