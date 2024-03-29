import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeartBrokenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartBrokenFilled'

      short_name='HeartBroken'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.725 19.85q-2.9-2.55-4.625-4.225-1.725-1.675-2.637-2.875-.913-1.2-1.188-2.163Q2 9.625 2 8.5q0-2.3 1.6-3.9T7.5 3q1.125 0 2.175.412 1.05.413 1.875 1.188l-1.175 4.125q-.125.5.163.888.287.387.787.387H13l-.65 6.35q-.025.2.163.225.187.025.237-.15L14.6 10.3q.15-.5-.15-.9t-.8-.4H12l1.775-5.3q.625-.35 1.313-.525Q15.775 3 16.5 3q2.3 0 3.9 1.6T22 8.5q0 1.125-.288 2.113-.287.987-1.199 2.212-.913 1.225-2.613 2.887-1.7 1.663-4.55 4.138-.55.475-1.312.475-.763 0-1.313-.475Z"/>
    </Icon>
  );
});

IconMaterialHeartBrokenFilled.displayName = 'AmauiIconMaterialHeartBrokenFilled';

export default IconMaterialHeartBrokenFilled;
