import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTram = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tram'

      short_name='Tram'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.5V8q0-2.425 2.125-3.175T11 4l.75-1.5H7V1h10v1.5h-3.25L13 4q2.975.075 4.988.812Q20 5.55 20 8v9.5q0 1.475-1.012 2.488Q17.975 21 16.5 21l1.5 1.5v.5h-2l-2-2h-4l-2 2H6v-.5L7.5 21q-1.475 0-2.487-1.012Q4 18.975 4 17.5ZM16.5 14H6h12-1.5ZM12 18q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 15 12 15t-1.062.438q-.438.437-.438 1.062t.438 1.062Q11.375 18 12 18Zm-.05-11h5.7H6.4h5.55ZM6 12h12V9H6Zm1.5 7h9q.65 0 1.075-.425Q18 18.15 18 17.5V14H6v3.5q0 .65.425 1.075Q6.85 19 7.5 19Zm4.45-13q-3.35 0-4.3.362Q6.7 6.725 6.4 7h11.25q-.3-.35-1.3-.675-1-.325-4.4-.325Z"/>
    </Icon>
  );
});

IconMaterialTram.displayName = 'AmauiIconMaterialTram';

export default IconMaterialTram;
