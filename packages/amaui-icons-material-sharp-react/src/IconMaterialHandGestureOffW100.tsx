import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureOffW100'

      short_name='HandGestureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m788-283-28-28v-437h28v465ZM503-568l-28-28v-243h28v271Zm143 62h-28v-293h28v293Zm90 322L360-560v235l-168-90 210 240q11 12 24.54 20.5T457-146h197q25 0 46.5-10.5T736-184Zm-279 66q-23 0-43-12t-35-29L154-416l34-34 144 81v-219L90-830l20-20L872-88l-20 20-97-97q-19 21-44.5 34T654-118H457Zm108-388Zm284-221q0-42-29.5-71.5T748-828v-28q54 0 91.5 37.5T877-727h-28ZM243-104q-58 0-98.5-40.66T104-243h28q0 46 32.51 78.5Q197.01-132 243-132v28Zm324-249ZM360-711l-28-28v-20h28v48Z"/>
    </Icon>
  );
});

IconMaterialHandGestureOffW100.displayName = 'AmauiIconMaterialHandGestureOffW100';

export default IconMaterialHandGestureOffW100;
