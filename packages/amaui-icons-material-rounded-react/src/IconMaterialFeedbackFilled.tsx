import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFeedbackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FeedbackFilled'

      short_name='Feedback'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm0-160q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 8 3 15.5t8.5 13q5.5 5.5 13 8.5t15.5 3ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z"/>
    </Icon>
  );
});

IconMaterialFeedbackFilled.displayName = 'AmauiIconMaterialFeedbackFilled';

export default IconMaterialFeedbackFilled;
