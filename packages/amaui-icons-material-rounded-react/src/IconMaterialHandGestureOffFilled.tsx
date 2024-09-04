import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHandGestureOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureOffFilled'

      short_name='HandGestureOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-40q-83 0-141.5-58.5T40-240q0-13 8.5-21.5T70-270q13 0 21.5 8.5T100-240q0 58 41 99t99 41q13 0 21.5 8.5T270-70q0 13-8.5 21.5T240-40Zm670-689q-13 0-21.5-8.5T880-759q0-51-35-86t-86-35q-13 0-21.5-8.5T729-910q0-13 8.5-21.5T759-940q75 0 128 53t53 128q0 13-8.5 21.5T910-729ZM600-507v-333q0-17 11.5-28.5T640-880q17 0 28.5 11.5T680-840v367h80v-287q0-17 11.5-28.5T800-800q17 0 28.5 11.5T840-760v429q0 27-24.5 37.5T772-302L623-451q-11-11-17-25.5t-6-30.5ZM280-790v-30q0-17 11.5-28.5T320-860q17 0 28.5 11.5T360-820v30q0 17-11.5 28.5T320-750q-17 0-28.5-11.5T280-790Zm160 150v-240q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v241q0 17-11.5 28T480-600q-17 0-28.5-11.5T440-640ZM413-40q-29 0-54-15.5T313-92L82-321q-17-17-16-41.5T87-402l20-15q12-10 27.5-11.5T164-423l116 58v-202L55-792q-12-12-11.5-28.5T56-849q12-12 28.5-12t28.5 12l735 736q12 12 12 28t-12 28q-12 12-28.5 12T791-57l-16-15q-20 15-44 23.5T680-40H413Z"/>
    </Icon>
  );
});

IconMaterialHandGestureOffFilled.displayName = 'AmauiIconMaterialHandGestureOffFilled';

export default IconMaterialHandGestureOffFilled;
