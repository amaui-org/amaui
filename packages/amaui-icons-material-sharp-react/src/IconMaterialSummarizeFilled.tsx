import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSummarizeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SummarizeFilled'

      short_name='Summarize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 9q.425 0 .713-.288Q9 8.425 9 8t-.287-.713Q8.425 7 8 7t-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9Zm0 4q.425 0 .713-.288Q9 12.425 9 12t-.287-.713Q8.425 11 8 11t-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0 4q.425 0 .713-.288Q9 16.425 9 16t-.287-.713Q8.425 15 8 15t-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm-5 4V3h13l5 5v13ZM15 9h4l-4-4Z"/>
    </Icon>
  );
});

IconMaterialSummarizeFilled.displayName = 'AmauiIconMaterialSummarizeFilled';

export default IconMaterialSummarizeFilled;
