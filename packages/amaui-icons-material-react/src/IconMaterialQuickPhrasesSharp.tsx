import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickPhrasesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickPhrasesSharp'
      short_name='QuickPhrases'

      {...props}
    >
      <path d="M8 22.5V16.975Q5.475 16.775 3.738 14.925Q2 13.075 2 10.5Q2 7.775 3.888 5.887Q5.775 4 8.5 4H9.175L7.6 2.4L9 1L13 5L9 9L7.6 7.6L9.175 6H8.5Q6.625 6 5.312 7.312Q4 8.625 4 10.5Q4 12.375 5.312 13.688Q6.625 15 8.5 15H10V17.675L12.675 15H15.5Q17.375 15 18.688 13.688Q20 12.375 20 10.5Q20 8.625 18.688 7.312Q17.375 6 15.5 6H15V4H15.5Q18.225 4 20.113 5.887Q22 7.775 22 10.5Q22 13.225 20.113 15.113Q18.225 17 15.5 17H13.5Z"/>
    </Icon>
  );
});

IconMaterialQuickPhrasesSharp.displayName = 'AmauiIconMaterialQuickPhrasesSharp';

export default IconMaterialQuickPhrasesSharp;
