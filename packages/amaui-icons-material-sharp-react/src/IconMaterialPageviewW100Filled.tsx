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
      <path d="m16.6 16.75.5-.5-2.95-2.95q.35-.5.45-.9.1-.4.1-.9 0-1.325-.937-2.263Q12.825 8.3 11.5 8.3t-2.262.937Q8.3 10.175 8.3 11.5t.938 2.262q.937.938 2.262.938.65 0 1.2-.213.55-.212 1-.637ZM11.5 14q-1.05 0-1.775-.725Q9 12.55 9 11.5q0-1.05.725-1.775Q10.45 9 11.5 9q1.05 0 1.775.725Q14 10.45 14 11.5q0 1.05-.725 1.775Q12.55 14 11.5 14Zm-8.2 4.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialPageviewW100Filled.displayName = 'AmauiIconMaterialPageviewW100Filled';

export default IconMaterialPageviewW100Filled;
