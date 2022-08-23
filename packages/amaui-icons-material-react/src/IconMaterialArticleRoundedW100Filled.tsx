import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArticleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArticleRoundedW100Filled'
      short_name='Article'

      {...props}
    >
      <path d="M8 16.35H13Q13.15 16.35 13.25 16.25Q13.35 16.15 13.35 16Q13.35 15.85 13.25 15.75Q13.15 15.65 13 15.65H8Q7.85 15.65 7.75 15.75Q7.65 15.85 7.65 16Q7.65 16.15 7.75 16.25Q7.85 16.35 8 16.35ZM8 12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35ZM8 8.35H16Q16.15 8.35 16.25 8.25Q16.35 8.15 16.35 8Q16.35 7.85 16.25 7.75Q16.15 7.65 16 7.65H8Q7.85 7.65 7.75 7.75Q7.65 7.85 7.65 8Q7.65 8.15 7.75 8.25Q7.85 8.35 8 8.35ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialArticleRoundedW100Filled.displayName = 'AmauiIconMaterialArticleRoundedW100Filled';

export default IconMaterialArticleRoundedW100Filled;
