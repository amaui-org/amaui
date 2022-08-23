import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSynagogueSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueSharp'
      short_name='Synagogue'

      {...props}
    >
      <path d="M1 21V7Q1 5.75 1.875 4.875Q2.75 4 4 4Q5.25 4 6.125 4.875Q7 5.75 7 7V7.3L12 3L17 7.3V7Q17 5.75 17.875 4.875Q18.75 4 20 4Q21.25 4 22.125 4.875Q23 5.75 23 7V21H13V15H11V21ZM19 8H21V7Q21 6.575 20.712 6.287Q20.425 6 20 6Q19.575 6 19.288 6.287Q19 6.575 19 7ZM3 8H5V7Q5 6.575 4.713 6.287Q4.425 6 4 6Q3.575 6 3.288 6.287Q3 6.575 3 7ZM3 19H5V10H3ZM7 19H9V13H15V19H17V9.925L12 5.625L7 9.925ZM19 19H21V10H19ZM12 11.5Q11.375 11.5 10.938 11.062Q10.5 10.625 10.5 10Q10.5 9.375 10.938 8.938Q11.375 8.5 12 8.5Q12.625 8.5 13.062 8.938Q13.5 9.375 13.5 10Q13.5 10.625 13.062 11.062Q12.625 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialSynagogueSharp.displayName = 'AmauiIconMaterialSynagogueSharp';

export default IconMaterialSynagogueSharp;
