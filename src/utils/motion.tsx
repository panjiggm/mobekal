import { useEffect, ReactNode } from 'react'
import { Box, Flex, forwardRef } from '@chakra-ui/react';
import { motion, isValidMotionProp, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const MotionBox = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Box ref={ref} {...chakraProps} />;
    })
);

export const MotionFlex = motion(
    forwardRef((props, ref) => {
        const chakraProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !isValidMotionProp(key))
        );
        return <Flex ref={ref} {...chakraProps} />;
    })
);

export const MotionScroll = ({ children }: { children: ReactNode }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const boxVariant = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0 }
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <MotionBox
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            {children}
        </MotionBox>
    );
}