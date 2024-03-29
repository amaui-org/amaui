import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNeurologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NeurologyFilled'

      short_name='Neurology'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M570 936q-13 0-25.5-2.5T520 926V226q12-5 24.5-7.5T570 216q52 0 89.5 35t40.5 86q59 8 99.5 53T840 496q0 22-5.5 42T818 576q11 18 16.5 38.5T840 656q0 62-40.5 106.5T699 815q-5 50-41.5 85.5T570 936Zm-180 0q-51 0-88-35.5T260 815q-60-8-100-53t-40-106q0-21 5.5-41.5T142 576q-11-18-16.5-38t-5.5-42q0-61 40-105.5t99-52.5q3-51 41-86.5t90-35.5q13 0 25.5 3t24.5 8v699q-12 5-24.5 7.5T390 936Z"/>
    </Icon>
  );
});

IconMaterialNeurologyFilled.displayName = 'AmauiIconMaterialNeurologyFilled';

export default IconMaterialNeurologyFilled;
