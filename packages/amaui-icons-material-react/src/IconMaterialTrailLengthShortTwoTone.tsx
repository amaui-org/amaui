import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthShortTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthShortTwoTone'
      short_name='TrailLengthShort'

      {...props}
    >
      <path d="M15 17.5q-1.875 0-3.337-1.137Q10.2 15.225 9.7 13.5H3.5v-3.025h6.2q.05-.225.163-.475.112-.25.262-.5H5.5V6.475H15q2.3 0 3.913 1.612Q20.525 9.7 20.525 12q0 2.275-1.625 3.887Q17.275 17.5 15 17.5Zm-8.5 0v-3.025h3.225V17.5Z"/>
    </Icon>
  )
});

export default IconMaterialTrailLengthShortTwoTone;
