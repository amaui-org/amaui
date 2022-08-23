import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlagiarismSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlagiarismSharp'
      short_name='Plagiarism'

      {...props}
    >
      <path d="M11.45 17Q11.9 17 12.338 16.887Q12.775 16.775 13.15 16.55L15.6 19L17 17.6L14.55 15.15Q14.775 14.775 14.887 14.337Q15 13.9 15 13.45Q15 12 13.975 11Q12.95 10 11.5 10Q10.05 10 9.025 11.025Q8 12.05 8 13.5Q8 14.95 9 15.975Q10 17 11.45 17ZM11.5 15Q10.875 15 10.438 14.562Q10 14.125 10 13.5Q10 12.875 10.438 12.438Q10.875 12 11.5 12Q12.125 12 12.562 12.438Q13 12.875 13 13.5Q13 14.125 12.562 14.562Q12.125 15 11.5 15ZM4 22V2H14L20 8V22ZM13 9V4H6V20H18V9ZM6 4V9V4V9V20Z"/>
    </Icon>
  );
});

IconMaterialPlagiarismSharp.displayName = 'AmauiIconMaterialPlagiarismSharp';

export default IconMaterialPlagiarismSharp;
