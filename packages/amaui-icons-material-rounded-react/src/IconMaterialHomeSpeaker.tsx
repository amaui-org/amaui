import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeSpeaker = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeSpeaker'

      short_name='HomeSpeaker'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.575 21Q7.75 21 6.55 19.637q-1.2-1.362-.95-3.162l1.375-10.3q.05-.275.2-.488.15-.212.425-.312l7.9-3.15q.45-.2.875.062.425.263.475.763l1.6 13.475q.225 1.8-.962 3.138Q16.3 21 14.5 21Zm-1.35-9H15.9L15 4.575l-6.1 2.45Zm1.35 7H14.5q.65 0 1.375-.55t.6-1.7L16.15 14h-8.2l-.35 2.725q-.15 1.15.6 1.713.75.562 1.375.562Z"/>
    </Icon>
  );
});

IconMaterialHomeSpeaker.displayName = 'AmauiIconMaterialHomeSpeaker';

export default IconMaterialHomeSpeaker;
