import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeartMinusSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusSharpW100'
      short_name='HeartMinus'

      {...props}
    >
      <path d="M11 11.475Zm0 7.775-.55-.5q-2.425-2.225-4.012-3.8-1.588-1.575-2.5-2.762Q3.025 11 2.663 10.05 2.3 9.1 2.3 8.15q0-1.775 1.213-2.988Q4.725 3.95 6.5 3.95q1.325 0 2.475.712 1.15.713 2.025 2.088.875-1.375 2.025-2.088 1.15-.712 2.475-.712 1.675 0 2.95 1.175 1.275 1.175 1.275 3 0 .475-.112.988-.113.512-.338 1.037H18.5q.25-.575.363-1.088.112-.512.112-.962 0-1.725-1.175-2.588-1.175-.862-2.3-.862-1.2 0-2.212.687-1.013.688-1.938 2.163h-.7Q9.7 6 8.7 5.325q-1-.675-2.2-.675-1.475 0-2.487 1Q3 6.65 3 8.15q0 .85.35 1.725.35.875 1.25 2.012.9 1.138 2.45 2.675Q8.6 16.1 11 18.3q.8-.725 1.5-1.375t1.3-1.225l.075.075.175.175.175.175.075.075q-.6.575-1.287 1.2-.688.625-1.463 1.35Zm3.65-5.9v-.7h6.7v.7Z"/>
    </Icon>
  );
});

IconMaterialHeartMinusSharpW100.displayName = 'AmauiIconMaterialHeartMinusSharpW100';

export default IconMaterialHeartMinusSharpW100;
