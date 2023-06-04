import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPageviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewW100Filled'

      short_name='Pageview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.35 16.5q.1.1.237.113.138.012.263-.113t.125-.25q0-.125-.125-.25l-2.7-2.7q.35-.5.45-.9.1-.4.1-.9 0-1.325-.937-2.263Q12.825 8.3 11.5 8.3t-2.262.937Q8.3 10.175 8.3 11.5t.938 2.262q.937.938 2.262.938.65 0 1.2-.213.55-.212 1-.637ZM11.5 14q-1.05 0-1.775-.725Q9 12.55 9 11.5q0-1.05.725-1.775Q10.45 9 11.5 9q1.05 0 1.775.725Q14 10.45 14 11.5q0 1.05-.725 1.775Q12.55 14 11.5 14Zm-6.7 4.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100Filled.displayName = 'AmauiIconMaterialPageviewW100Filled';

export default IconMaterialPageviewW100Filled;
