import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSynagogueSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SynagogueSharpFilled'
      short_name='Synagogue'

      {...props}
    >
      <path d="M19 8V7Q19 6.175 19.587 5.588Q20.175 5 21 5Q21.825 5 22.413 5.588Q23 6.175 23 7V8ZM1 8V7Q1 6.175 1.588 5.588Q2.175 5 3 5Q3.825 5 4.412 5.588Q5 6.175 5 7V8ZM1 21V9H5V21ZM6 21V8L12 3L18 8V21H14V14H10V21ZM19 21V9H23V21ZM12 11.5Q12.625 11.5 13.062 11.062Q13.5 10.625 13.5 10Q13.5 9.375 13.062 8.938Q12.625 8.5 12 8.5Q11.375 8.5 10.938 8.938Q10.5 9.375 10.5 10Q10.5 10.625 10.938 11.062Q11.375 11.5 12 11.5Z"/>
    </Icon>
  );
});

IconMaterialSynagogueSharpFilled.displayName = 'AmauiIconMaterialSynagogueSharpFilled';

export default IconMaterialSynagogueSharpFilled;
