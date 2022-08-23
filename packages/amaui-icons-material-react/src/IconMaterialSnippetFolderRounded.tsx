import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnippetFolderRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnippetFolderRounded'
      short_name='SnippetFolder'

      {...props}
    >
      <path d="M14.5 15.5V10.5H15.875L17.5 12.125V15.5ZM14 17H18Q18.425 17 18.712 16.712Q19 16.425 19 16V11.925Q19 11.725 18.925 11.537Q18.85 11.35 18.7 11.2L16.8 9.3Q16.65 9.15 16.463 9.075Q16.275 9 16.075 9H14Q13.575 9 13.288 9.287Q13 9.575 13 10V16Q13 16.425 13.288 16.712Q13.575 17 14 17ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialSnippetFolderRounded.displayName = 'AmauiIconMaterialSnippetFolderRounded';

export default IconMaterialSnippetFolderRounded;
