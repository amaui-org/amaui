import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLandscape2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Landscape2W100'

      short_name='Landscape2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m98-212 108.16-204.2q7.84-14.8 21.72-23.3Q241.75-448 259-448q18 0 33.1 9.37 15.1 9.38 21.9 26.63l19 44q9 19 33.06 17.43Q390.13-352.14 397-371l83-261q12-37 44-58.5t70.38-21.5Q632-712 664-691q32 21 44 57l155 422h-29L681-625q-9-28-33.5-43.5T594-684q-29 0-53.5 16T507-624l-83 261q-7 19-23 30.5T364.61-321q-18.35 0-33.98-9.5Q315-340 307-357l-21-50q-8-17-27.5-17.5T230-408L128-212H98Zm166.94-352q-37.94 0-65.44-27.15-27.5-27.14-27.5-64.61Q172-694 199.5-721q27.5-27 65.44-27t64.5 26.92Q356-694.15 356-655.69 356-618 329.44-591t-64.5 27Zm-.1-28q26.84 0 45-19T328-656.5q0-26.5-18.16-45t-45-18.5Q238-720 219-701.6q-19 18.4-19 45.6 0 26 19 45t45.84 19ZM365-321ZM264-656Z"/>
    </Icon>
  );
});

IconMaterialLandscape2W100.displayName = 'AmauiIconMaterialLandscape2W100';

export default IconMaterialLandscape2W100;
