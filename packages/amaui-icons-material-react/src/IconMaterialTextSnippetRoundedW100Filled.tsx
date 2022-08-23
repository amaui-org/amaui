import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextSnippetRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextSnippetRoundedW100Filled'
      short_name='TextSnippet'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H14.1Q14.4 4.3 14.688 4.425Q14.975 4.55 15.175 4.75L19.25 8.825Q19.45 9.025 19.575 9.312Q19.7 9.6 19.7 9.9V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM8 15.7H16Q16.15 15.7 16.25 15.6Q16.35 15.5 16.35 15.35Q16.35 15.2 16.25 15.1Q16.15 15 16 15H8Q7.85 15 7.75 15.1Q7.65 15.2 7.65 15.35Q7.65 15.5 7.75 15.6Q7.85 15.7 8 15.7ZM8 12.35H16Q16.15 12.35 16.25 12.25Q16.35 12.15 16.35 12Q16.35 11.85 16.25 11.75Q16.15 11.65 16 11.65H8Q7.85 11.65 7.75 11.75Q7.65 11.85 7.65 12Q7.65 12.15 7.75 12.25Q7.85 12.35 8 12.35ZM8 9H12.65Q12.8 9 12.9 8.9Q13 8.8 13 8.65Q13 8.5 12.9 8.4Q12.8 8.3 12.65 8.3H8Q7.85 8.3 7.75 8.4Q7.65 8.5 7.65 8.65Q7.65 8.8 7.75 8.9Q7.85 9 8 9Z"/>
    </Icon>
  );
});

IconMaterialTextSnippetRoundedW100Filled.displayName = 'AmauiIconMaterialTextSnippetRoundedW100Filled';

export default IconMaterialTextSnippetRoundedW100Filled;
