import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan3RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man3RoundedW100'
      short_name='Man3'

      {...props}
    >
      <path d="M11.05 21.6q-.325 0-.537-.212-.213-.213-.213-.538v-5.7h-.95q-.325 0-.538-.212-.212-.213-.212-.538V9.3q0-.625.437-1.062Q9.475 7.8 10.1 7.8h3.8q.625 0 1.063.438.437.437.437 1.062v5.1q0 .325-.212.538-.213.212-.538.212h-.95v5.7q0 .325-.212.538-.213.212-.538.212Zm.675-15.625-1.3-1.3Q10.3 4.55 10.3 4.4q0-.15.125-.275l1.3-1.3Q11.85 2.7 12 2.7q.15 0 .275.125l1.3 1.3q.125.125.125.275 0 .15-.125.275l-1.3 1.3Q12.15 6.1 12 6.1q-.15 0-.275-.125Z"/>
    </Icon>
  );
});

IconMaterialMan3RoundedW100.displayName = 'AmauiIconMaterialMan3RoundedW100';

export default IconMaterialMan3RoundedW100;
