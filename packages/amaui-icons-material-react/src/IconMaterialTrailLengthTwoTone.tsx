import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrailLengthTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrailLengthTwoTone'
      short_name='TrailLength'

      {...props}
    >
      <path d="M7 17V15H13Q12.65 14.575 12.438 14.075Q12.225 13.575 12.1 13H9V11H12.1Q12.225 10.425 12.438 9.925Q12.65 9.425 13 9H3V7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17ZM17 15Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9Q15.75 9 14.875 9.875Q14 10.75 14 12Q14 13.25 14.875 14.125Q15.75 15 17 15ZM2 13V11H8V13ZM3 17V15H6V17ZM17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Q17 12 17 12Z"/>
    </Icon>
  );
});

IconMaterialTrailLengthTwoTone.displayName = 'AmauiIconMaterialTrailLengthTwoTone';

export default IconMaterialTrailLengthTwoTone;
