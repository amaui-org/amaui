import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMatchWord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MatchWord'

      short_name='MatchWord'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M40 857V657h80v120h720V657h80v200H40Zm342-161v-34h-3q-13 20-35 31.5T294 705q-49 0-77-25.5T189 610q0-42 32.5-68.5T305 515q23 0 42.5 3.5T381 530v-14q0-27-18.5-43T312 457q-21 0-39.5 9T241 492l-43-32q19-27 48-41t67-14q62 0 95 29.5t33 85.5v176h-59Zm-66-134q-32 0-49 12.5T250 610q0 20 15 32.5t39 12.5q32 0 54.5-22.5T381 578q-14-8-32-12t-33-4Zm185 134V295h62v113l-3 40h3q3-5 24-25.5t66-20.5q64 0 101 46t37 106q0 60-36.5 105.5T653 705q-41 0-62.5-18T563 659h-3v37h-59Zm143-238q-40 0-62 29.5T560 553q0 37 22 66t62 29q40 0 62.5-29t22.5-66q0-37-22.5-66T644 458Z"/>
    </Icon>
  );
});

IconMaterialMatchWord.displayName = 'AmauiIconMaterialMatchWord';

export default IconMaterialMatchWord;
