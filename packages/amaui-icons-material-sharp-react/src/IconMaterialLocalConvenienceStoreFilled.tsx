import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalConvenienceStoreFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalConvenienceStoreFilled'

      short_name='LocalConvenienceStore'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.025 18h3v-1h-2v-1h2v-3h-3v1h2v1h-2Zm7 0h1v-5h-1v2h-1v-2h-1v3h2Zm-12 3v-9.95q-.575-.525-.887-1.35-.313-.825-.013-1.8l1.05-3.4q.2-.65.713-1.075Q4.4 3 5.075 3h13.9q.675 0 1.175.412.5.413.725 1.088l1.05 3.4q.3.975-.012 1.775-.313.8-.888 1.375V21Zm11.2-11q.675 0 1.025-.463.35-.462.275-1.037l-.55-3.5h-1.95v3.7q0 .525.35.913.35.387.85.387Zm-4.5 0q.575 0 .938-.387.362-.388.362-.913V5h-1.95l-.55 3.5q-.1.6.263 1.05.362.45.937.45Zm-4.45 0q.45 0 .787-.325.338-.325.413-.825L7.025 5h-1.95l-1 3.35q-.15.5.162 1.075Q4.55 10 5.275 10Zm13.5 0q.725 0 1.05-.575.325-.575.15-1.075L18.925 5h-1.9l.55 3.85q.075.5.413.825.337.325.787.325Z"/>
    </Icon>
  );
});

IconMaterialLocalConvenienceStoreFilled.displayName = 'AmauiIconMaterialLocalConvenienceStoreFilled';

export default IconMaterialLocalConvenienceStoreFilled;
