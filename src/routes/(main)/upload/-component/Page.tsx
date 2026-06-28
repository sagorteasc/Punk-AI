import { useState, useRef, useCallback } from 'react'
import {
  Box,
  Flex,
  Text,
  TextInput,
  Textarea,
  Group,
  Stack,
  Badge,
  Image,
  ActionIcon,
  Paper,
  Divider,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { MoreHorizontal } from 'lucide-react'
import PrimaryBtn from '@/components/PrimaryBtn'
import SecondaryBtn from '@/components/secondaryBtn'
import { useMediaQuery } from '@mantine/hooks'

/* ─── Constants ───────────────────────────────────────────────── */
const CTA_MAX = 40
const HEADLINE_MAX = 60
const BODY_MAX = 200

interface UploadedImage {
  id: string
  file: File
  url: string
}

/* ─── Component ───────────────────────────────────────────────── */
export default function UploadPage() {
  /* Form State */
  const [cta, setCta] = useState('Shop the Spring drop')
  const [headline, setHeadline] = useState('New season, new standards.')
  const [body, setBody] = useState(
    'Meet the Spring lineup — engineered for everyday performance and designed to turn heads. Limited drops, premium materials, and free shipping on every order.',
  )
  const [images, setImages] = useState<UploadedImage[]>([])
  const [imagesExpanded, setImagesExpanded] = useState(false)
  const isMobile = useMediaQuery('(max-width: 64em)')

  /* Dropzone ref */
  const openRef = useRef<() => void>(null)

  /* Handle file drops */
  const handleDrop = useCallback((files: File[]) => {
    const newImages = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      url: URL.createObjectURL(file),
    }))
    setImages((prev) => [...prev, ...newImages])
  }, [])

  /* Remove image */
  const removeImage = useCallback((id: string) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id)
      if (img) URL.revokeObjectURL(img.url)
      return prev.filter((i) => i.id !== id)
    })
  }, [])

  return (
    <Box className="flex! h-dvh! w-full! items-start! justify-center! overflow-y-auto! px-4! py-6! lg:items-center!">
      <Flex
        style={{
          backgroundColor: 'var(--mantine-color-widget-primary)',
        }}
        className="mx-auto! my-auto! h-auto! w-[95%]! max-w-250! flex-col! justify-center! rounded-lg! lg:h-full! lg:w-full! lg:flex-row! xl:h-[95%]!"
      >
        {/* ────── LEFT PANEL: Upload Campaign Content ────── */}
        {isMobile ? (
          <Box style={{ flex: '1 1 0' }}>
            <Box maw={980}>
              {/* Header */}
              <Group px={4} pt={4} className="mb-4.5! rounded-md!">
                <Flex
                  align="center"
                  className="bg-secondary-widget! hover:bg-secondary-widget/80! flex! w-full! cursor-pointer! gap-2.5! rounded-md! p-4! text-left! transition-colors!"
                >
                  <Text>
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      className="text-primary-text"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4458_10317)">
                        <rect
                          width="32.5411"
                          height="32.5411"
                          rx="16.2706"
                          fill="currentColor"
                          className="fill-secondary-widget"
                        />
                        <path
                          d="M32.5411 16.2706C32.5411 25.2566 25.2566 32.5411 16.2706 32.5411C7.28458 32.5411 0 25.2566 0 16.2706C0 7.28458 7.28458 0 16.2706 0C25.2566 0 32.5411 7.28458 32.5411 16.2706ZM1.78976 16.2706C1.78976 24.2681 8.27304 30.7514 16.2706 30.7514C24.2681 30.7514 30.7514 24.2681 30.7514 16.2706C30.7514 8.27304 24.2681 1.78976 16.2706 1.78976C8.27304 1.78976 1.78976 8.27304 1.78976 16.2706Z"
                          fill="currentColor"
                        />
                        <path
                          d="M16.2706 0.894881C16.2706 0.400652 15.8696 -0.00256592 15.3761 0.0246031C13.5452 0.125407 11.7422 0.535146 10.0441 1.23852C8.07005 2.0562 6.2764 3.25468 4.76554 4.76554C3.25468 6.2764 2.05619 8.07006 1.23852 10.0441C0.535145 11.7422 0.125407 13.5452 0.024603 15.3761C-0.00256595 15.8696 0.400652 16.2706 0.894881 16.2706C1.38911 16.2706 1.78688 15.8695 1.8174 15.3763C1.91614 13.7805 2.27863 12.2099 2.89205 10.729C3.61978 8.97211 4.68642 7.37576 6.03109 6.03109C7.37576 4.68643 8.97211 3.61978 10.729 2.89205C12.2099 2.27863 13.7805 1.91614 15.3762 1.8174C15.8695 1.78688 16.2706 1.38911 16.2706 0.894881Z"
                          fill="currentColor"
                        />
                        <g clip-path="url(#clip1_4458_10317)">
                          <path
                            d="M16.618 18.9831C18.1157 18.9831 19.3298 17.769 19.3298 16.2713C19.3298 14.7737 18.1157 13.5596 16.618 13.5596C15.1203 13.5596 13.9062 14.7737 13.9062 16.2713C13.9062 17.769 15.1203 18.9831 16.618 18.9831Z"
                            fill="currentColor"
                          />
                          <path
                            d="M22.5835 15.7286H22.0135C21.7586 13.1703 19.7182 11.13 17.16 10.8751V10.305C17.16 10.1612 17.1028 10.0233 17.0011 9.92155C16.8994 9.81984 16.7614 9.7627 16.6176 9.7627C16.4738 9.7627 16.3358 9.81984 16.2341 9.92155C16.1324 10.0233 16.0752 10.1612 16.0752 10.305V10.8751C13.517 11.13 11.4766 13.1703 11.2217 15.7286H10.6517C10.5079 15.7286 10.3699 15.7857 10.2682 15.8874C10.1665 15.9891 10.1094 16.1271 10.1094 16.2709C10.1094 16.4148 10.1665 16.5527 10.2682 16.6544C10.3699 16.7561 10.5079 16.8133 10.6517 16.8133H11.2217C11.4772 19.3716 13.517 21.4119 16.0752 21.6668V22.2368C16.0752 22.3806 16.1324 22.5186 16.2341 22.6203C16.3358 22.722 16.4738 22.7792 16.6176 22.7792C16.7614 22.7792 16.8994 22.722 17.0011 22.6203C17.1028 22.5186 17.16 22.3806 17.16 22.2368V21.6668C19.7182 21.4113 21.7586 19.3716 22.0135 16.8133H22.5835C22.7273 16.8133 22.8653 16.7561 22.967 16.6544C23.0687 16.5527 23.1258 16.4148 23.1258 16.2709C23.1258 16.1271 23.0687 15.9891 22.967 15.8874C22.8653 15.7857 22.7273 15.7286 22.5835 15.7286ZM17.1524 20.5734C17.1328 20.2919 16.9045 20.0674 16.6176 20.0674C16.3307 20.0674 16.1024 20.2919 16.0828 20.5734C15.1257 20.4531 14.2358 20.0175 13.5537 19.3354C12.8715 18.6532 12.436 17.7634 12.3157 16.8062C12.5971 16.7862 12.8211 16.5573 12.8211 16.2709C12.8211 15.9846 12.5971 15.7557 12.3151 15.7362C12.4354 14.779 12.871 13.8891 13.5531 13.207C14.2353 12.5249 15.1251 12.0893 16.0823 11.969C16.1024 12.2499 16.3307 12.4745 16.6176 12.4745C16.9045 12.4745 17.1328 12.2499 17.1524 11.9684C18.1095 12.0887 18.9994 12.5243 19.6815 13.2065C20.3637 13.8886 20.7992 14.7785 20.9195 15.7356C20.6381 15.7557 20.4141 15.9846 20.4141 16.2709C20.4141 16.5573 20.6381 16.7862 20.9201 16.8057C20.7996 17.7629 20.3639 18.6528 19.6817 19.335C18.9995 20.0172 18.1096 20.4529 17.1524 20.5734Z"
                            fill="currentColor"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_4458_10317">
                          <rect
                            width="32.5411"
                            height="32.5411"
                            rx="16.2706"
                            fill="white"
                          />
                        </clipPath>
                        <clipPath id="clip1_4458_10317">
                          <rect
                            width="13.0165"
                            height="13.0165"
                            fill="white"
                            transform="translate(10.1094 9.7627)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Text>
                  <Box>
                    <Text fw={700} mb={2} c="var(--mantine-color-text-primary)">
                      Upload campaign content
                    </Text>
                    <Text
                      tt="uppercase"
                      fw={500}
                      className="text-[11px]! text-[#8B8E96]!"
                    >
                      SPRING LAUNCH · DRAFT
                    </Text>
                  </Box>
                </Flex>
              </Group>

              <Box px={24}>
                {/* ── Section 1: Ad copy ── */}
                <Group gap="xs" mb="md" align="center">
                  <Badge
                    radius={7}
                    variant="filled"
                    bg="var(--color-secondary-widget)"
                    w={24}
                    h={24}
                    p={0}
                    style={{
                      border: '1px solid var(--color-stroke-widget)',
                    }}
                    className="text-[11px]! text-[#9B9EA6]!"
                  >
                    1
                  </Badge>
                  <Text
                    fw={700}
                    size="sm"
                    c="var(--mantine-color-text-primary)"
                  >
                    Ad copy
                  </Text>
                  <Divider flex={1} color="#26282C" />
                </Group>

                {/* Call to action */}
                <Box mb="md">
                  <Group justify="space-between" mb={8}>
                    <Group gap={6}>
                      <Text
                        fw={600}
                        c="var(--mantine-color-text-primary)"
                        className="text-[13px]!"
                      >
                        Call to action
                      </Text>
                      <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                        {cta.length}/{CTA_MAX}
                      </Text>
                    </Group>
                    <PunkIdeasBtn />
                  </Group>
                  <TextInput
                    value={cta}
                    onChange={(e) =>
                      setCta(e.currentTarget.value.slice(0, CTA_MAX))
                    }
                    maxLength={CTA_MAX}
                    radius={10}
                    classNames={{
                      input:
                        'h-10 border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338] mb-5',
                    }}
                  />
                </Box>

                {/* Headline */}
                <Box mb="md">
                  <Group justify="space-between" mb={8}>
                    <Group gap={6}>
                      <Text
                        fw={600}
                        c="var(--mantine-color-text-primary)"
                        className="text-[13px]!"
                      >
                        Headline
                      </Text>
                      <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                        {headline.length}/{HEADLINE_MAX}
                      </Text>
                    </Group>
                    <PunkIdeasBtn />
                  </Group>
                  <TextInput
                    value={headline}
                    onChange={(e) =>
                      setHeadline(e.currentTarget.value.slice(0, HEADLINE_MAX))
                    }
                    maxLength={HEADLINE_MAX}
                    radius={10}
                    classNames={{
                      input:
                        'h-10 border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338] mb-5',
                    }}
                  />
                </Box>

                {/* Body copy */}
                <Box className="mb-7.5!">
                  <Group justify="space-between" mb={8}>
                    <Group gap={6}>
                      <Text
                        fw={600}
                        c="var(--mantine-color-text-primary)"
                        className="text-[13px]!"
                      >
                        Body copy
                      </Text>
                      <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                        {body.length}/{BODY_MAX}
                      </Text>
                    </Group>
                    <PunkIdeasBtn />
                  </Group>
                  <Textarea
                    value={body}
                    onChange={(e) =>
                      setBody(e.currentTarget.value.slice(0, BODY_MAX))
                    }
                    maxLength={BODY_MAX}
                    radius={10}
                    classNames={{
                      input:
                        'min-h-28! border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338]',
                    }}
                  />
                </Box>

                {/* ── Section 2: Campaign assets ── */}
                <Group gap="xs" align="center" className="mb-5.75!">
                  <Badge
                    radius={7}
                    variant="filled"
                    bg="var(--color-secondary-widget)"
                    w={24}
                    h={24}
                    p={0}
                    style={{
                      border: '1px solid var(--color-stroke-widget)',
                    }}
                    className="text-[11px]! text-[#9B9EA6]!"
                  >
                    2
                  </Badge>
                  <Text
                    fw={700}
                    size="sm"
                    c="var(--mantine-color-text-primary)"
                  >
                    Campaign assets
                  </Text>
                  <Divider flex={1} color="#26282C" />
                </Group>

                {/* Dropzone */}
                <Dropzone
                  onDrop={handleDrop}
                  accept={IMAGE_MIME_TYPE}
                  openRef={openRef}
                  radius={14}
                  styles={{
                    root: {
                      backgroundColor: 'transparent',
                      border: '2px dashed var(--mantine-color-divider)',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#E91E8C',
                      },
                    },
                  }}
                  py="xl"
                  mb={9}
                >
                  <Stack align="center" gap={2} className="text-center!">
                    <Group gap={4}>
                      <Text
                        c="var(--mantine-color-text-primary)"
                        fw={600}
                        className="text-[13px]!"
                      >
                        Drag files here or
                      </Text>
                      <Text
                        fw={600}
                        c="#E91E8C"
                        className="cursor-pointer! text-[13px]!"
                      >
                        browse
                      </Text>
                    </Group>
                    <Text className="text-xs! text-[#8B8E96]!">
                      We auto-sort by type — images, video & reels, documents.
                    </Text>
                  </Stack>
                </Dropzone>

                {/* Images section */}
                {images.length > 0 && (
                  <Box mt={46} mb={9}>
                    <Group justify="space-between" mb="sm">
                      <Group gap={8}>
                        <Text
                          fw={700}
                          c="var(--mantine-color-primary-widget)"
                          fz={12}
                        >
                          Images
                        </Text>
                        <Badge
                          radius={7}
                          variant="filled"
                          bg="var(--color-secondary-widget)"
                          w={24}
                          h={24}
                          p={0}
                          style={{
                            border: '1px solid var(--color-stroke-widget)',
                          }}
                          className="text-[11px]! text-[#9B9EA6]!"
                        >
                          {images.length}
                        </Badge>
                      </Group>
                      <Text
                        size="xs"
                        c="var(--mantine-color-text-primary)"
                        fz={11}
                        style={{
                          cursor: 'pointer',
                          textDecoration: 'underline',
                        }}
                        onClick={() => setImagesExpanded(!imagesExpanded)}
                      >
                        {imagesExpanded ? 'Collapse' : 'Expand all'}
                      </Text>
                    </Group>

                    {imagesExpanded ? (
                      /* Expanded grid */
                      <Paper
                        p={12}
                        radius={12}
                        className="border border-[#2C2E33] bg-[#2D2D2D]"
                      >
                        <Flex gap={12} wrap="wrap">
                          {images.map((img) => (
                            <Box
                              key={img.id}
                              pos="relative"
                              w={100}
                              h={100}
                              style={{
                                borderRadius: 'var(--mantine-radius-md)',
                                overflow: 'auto',
                              }}
                            >
                              {' '}
                              <Image
                                src={img.url}
                                alt={img.file.name}
                                w="100%"
                                h="100%"
                                fit="cover"
                              />{' '}
                              <ActionIcon
                                size="xs"
                                variant="filled"
                                bg="rgba(0,0,0,0.6)"
                                pos="absolute"
                                top={4}
                                right={4}
                                radius="xl"
                                onClick={() => removeImage(img.id)}
                                style={{ color: 'white' }}
                              >
                                {' '}
                                ×{' '}
                              </ActionIcon>{' '}
                            </Box>
                          ))}
                        </Flex>
                      </Paper>
                    ) : (
                      /* Collapsed summary */
                      <Paper
                        p={12}
                        radius={12}
                        className="border border-[#2C2E33] bg-[#2D2D2D]"
                      >
                        <Group gap={12} align="center" wrap="nowrap">
                          <Box className="h-12 w-12 shrink-0 overflow-auto rounded-md">
                            <Image
                              src={images[0]?.url}
                              alt="preview"
                              w="100%"
                              h="100%"
                              fit="cover"
                            />
                          </Box>

                          <Box className="flex-1">
                            <Text
                              fw={600}
                              className="text-primary-text! text-[13px]!"
                            >
                              {images.length} image
                              {images.length > 1 ? 's' : ''}
                            </Text>

                            <Text className="text-xs! text-[#8B8E96]!">
                              Tap to expand · select, drag to reorder first
                              image will be the Cover
                            </Text>
                          </Box>
                        </Group>
                      </Paper>
                    )}
                  </Box>
                )}
              </Box>
            </Box>

            <Divider
              mx={0}
              mb={16}
              color="#26282C"
              className="hidden! lg:flex!"
            />
            {/* Bottom Actions */}
            <Box px={24} pb={14}>
              <Group gap="sm" wrap="nowrap">
                <SecondaryBtn w={120} h={42} radius="md">
                  Discard
                </SecondaryBtn>

                <PrimaryBtn flex={1} h={42} radius="md">
                  Upload content
                </PrimaryBtn>
              </Group>
            </Box>
          </Box>
        ) : (
          <Box
            style={{
              flex: '1 1 0',
              minHeight: 0,
              height: '100%',
            }}
            className="custom-scrollbar flex! flex-col! lg:overflow-hidden! xl:overflow-auto!"
          >
            {/* Header */}
            <Box px={4} pt={4} className="mb-4.5!">
              <Flex
                align="center"
                className="bg-secondary-widget! hover:bg-secondary-widget/80! flex! w-full! cursor-pointer! gap-2.5! rounded-md! p-4! text-left! transition-colors!"
              >
                <Text>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    className="text-primary-text"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_4458_10317)">
                      <rect
                        width="32.5411"
                        height="32.5411"
                        rx="16.2706"
                        fill="currentColor"
                        className="fill-secondary-widget"
                      />
                      <path
                        d="M32.5411 16.2706C32.5411 25.2566 25.2566 32.5411 16.2706 32.5411C7.28458 32.5411 0 25.2566 0 16.2706C0 7.28458 7.28458 0 16.2706 0C25.2566 0 32.5411 7.28458 32.5411 16.2706ZM1.78976 16.2706C1.78976 24.2681 8.27304 30.7514 16.2706 30.7514C24.2681 30.7514 30.7514 24.2681 30.7514 16.2706C30.7514 8.27304 24.2681 1.78976 16.2706 1.78976C8.27304 1.78976 1.78976 8.27304 1.78976 16.2706Z"
                        fill="currentColor"
                      />
                      <path
                        d="M16.2706 0.894881C16.2706 0.400652 15.8696 -0.00256592 15.3761 0.0246031C13.5452 0.125407 11.7422 0.535146 10.0441 1.23852C8.07005 2.0562 6.2764 3.25468 4.76554 4.76554C3.25468 6.2764 2.05619 8.07006 1.23852 10.0441C0.535145 11.7422 0.125407 13.5452 0.024603 15.3761C-0.00256595 15.8696 0.400652 16.2706 0.894881 16.2706C1.38911 16.2706 1.78688 15.8695 1.8174 15.3763C1.91614 13.7805 2.27863 12.2099 2.89205 10.729C3.61978 8.97211 4.68642 7.37576 6.03109 6.03109C7.37576 4.68643 8.97211 3.61978 10.729 2.89205C12.2099 2.27863 13.7805 1.91614 15.3762 1.8174C15.8695 1.78688 16.2706 1.38911 16.2706 0.894881Z"
                        fill="currentColor"
                      />
                      <g clip-path="url(#clip1_4458_10317)">
                        <path
                          d="M16.618 18.9831C18.1157 18.9831 19.3298 17.769 19.3298 16.2713C19.3298 14.7737 18.1157 13.5596 16.618 13.5596C15.1203 13.5596 13.9062 14.7737 13.9062 16.2713C13.9062 17.769 15.1203 18.9831 16.618 18.9831Z"
                          fill="currentColor"
                        />
                        <path
                          d="M22.5835 15.7286H22.0135C21.7586 13.1703 19.7182 11.13 17.16 10.8751V10.305C17.16 10.1612 17.1028 10.0233 17.0011 9.92155C16.8994 9.81984 16.7614 9.7627 16.6176 9.7627C16.4738 9.7627 16.3358 9.81984 16.2341 9.92155C16.1324 10.0233 16.0752 10.1612 16.0752 10.305V10.8751C13.517 11.13 11.4766 13.1703 11.2217 15.7286H10.6517C10.5079 15.7286 10.3699 15.7857 10.2682 15.8874C10.1665 15.9891 10.1094 16.1271 10.1094 16.2709C10.1094 16.4148 10.1665 16.5527 10.2682 16.6544C10.3699 16.7561 10.5079 16.8133 10.6517 16.8133H11.2217C11.4772 19.3716 13.517 21.4119 16.0752 21.6668V22.2368C16.0752 22.3806 16.1324 22.5186 16.2341 22.6203C16.3358 22.722 16.4738 22.7792 16.6176 22.7792C16.7614 22.7792 16.8994 22.722 17.0011 22.6203C17.1028 22.5186 17.16 22.3806 17.16 22.2368V21.6668C19.7182 21.4113 21.7586 19.3716 22.0135 16.8133H22.5835C22.7273 16.8133 22.8653 16.7561 22.967 16.6544C23.0687 16.5527 23.1258 16.4148 23.1258 16.2709C23.1258 16.1271 23.0687 15.9891 22.967 15.8874C22.8653 15.7857 22.7273 15.7286 22.5835 15.7286ZM17.1524 20.5734C17.1328 20.2919 16.9045 20.0674 16.6176 20.0674C16.3307 20.0674 16.1024 20.2919 16.0828 20.5734C15.1257 20.4531 14.2358 20.0175 13.5537 19.3354C12.8715 18.6532 12.436 17.7634 12.3157 16.8062C12.5971 16.7862 12.8211 16.5573 12.8211 16.2709C12.8211 15.9846 12.5971 15.7557 12.3151 15.7362C12.4354 14.779 12.871 13.8891 13.5531 13.207C14.2353 12.5249 15.1251 12.0893 16.0823 11.969C16.1024 12.2499 16.3307 12.4745 16.6176 12.4745C16.9045 12.4745 17.1328 12.2499 17.1524 11.9684C18.1095 12.0887 18.9994 12.5243 19.6815 13.2065C20.3637 13.8886 20.7992 14.7785 20.9195 15.7356C20.6381 15.7557 20.4141 15.9846 20.4141 16.2709C20.4141 16.5573 20.6381 16.7862 20.9201 16.8057C20.7996 17.7629 20.3639 18.6528 19.6817 19.335C18.9995 20.0172 18.1096 20.4529 17.1524 20.5734Z"
                          fill="currentColor"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4458_10317">
                        <rect
                          width="32.5411"
                          height="32.5411"
                          rx="16.2706"
                          fill="white"
                        />
                      </clipPath>
                      <clipPath id="clip1_4458_10317">
                        <rect
                          width="13.0165"
                          height="13.0165"
                          fill="white"
                          transform="translate(10.1094 9.7627)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Text>
                <Box>
                  <Text fw={700} mb={2} c="var(--mantine-color-text-primary)">
                    Upload campaign content
                  </Text>
                  <Text
                    tt="uppercase"
                    fw={500}
                    className="text-[11px]! text-[#8B8E96]!"
                  >
                    SPRING LAUNCH · DRAFT
                  </Text>
                </Box>
              </Flex>
            </Box>

            <Box
              style={{ flex: 1, height: 0, maxHeight: 'calc(100vh - 390px)' }}
              className="custom-scrollbar overflow-auto! lg:max-h-[calc(100vh-190px)]! xl:max-h-[calc(100vh-130px)]! 2xl:max-h-[calc(100vh-390px)]!"
            >
              <Box maw={980}>
                <Box px={24} className='lg:h-96.25! xl:h-auto! overflow-auto!'>
                  {/* ── Section 1: Ad copy ── */}
                  <Group gap="xs" mb="md" align="center">
                    <Badge
                      radius={7}
                      variant="filled"
                      bg="var(--color-secondary-widget)"
                      w={24}
                      h={24}
                      p={0}
                      style={{
                        border: '1px solid var(--color-stroke-widget)',
                      }}
                      className="text-[11px]! text-[#9B9EA6]!"
                    >
                      1
                    </Badge>
                    <Text
                      fw={700}
                      size="sm"
                      c="var(--mantine-color-text-primary)"
                    >
                      Ad copy
                    </Text>
                    <Divider flex={1} color="#26282C" />
                  </Group>

                  {/* Call to action */}
                  <Box mb="md">
                    <Group justify="space-between" mb={8}>
                      <Group gap={6}>
                        <Text
                          fw={600}
                          c="var(--mantine-color-text-primary)"
                          className="text-[13px]!"
                        >
                          Call to action
                        </Text>
                        <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                          {cta.length}/{CTA_MAX}
                        </Text>
                      </Group>
                      <PunkIdeasBtn />
                    </Group>
                    <TextInput
                      value={cta}
                      onChange={(e) =>
                        setCta(e.currentTarget.value.slice(0, CTA_MAX))
                      }
                      maxLength={CTA_MAX}
                      radius={10}
                      classNames={{
                        input:
                          'h-10 border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338] mb-5',
                      }}
                    />
                  </Box>

                  {/* Headline */}
                  <Box mb="md">
                    <Group justify="space-between" mb={8}>
                      <Group gap={6}>
                        <Text
                          fw={600}
                          c="var(--mantine-color-text-primary)"
                          className="text-[13px]!"
                        >
                          Headline
                        </Text>
                        <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                          {headline.length}/{HEADLINE_MAX}
                        </Text>
                      </Group>
                      <PunkIdeasBtn />
                    </Group>
                    <TextInput
                      value={headline}
                      onChange={(e) =>
                        setHeadline(
                          e.currentTarget.value.slice(0, HEADLINE_MAX),
                        )
                      }
                      maxLength={HEADLINE_MAX}
                      radius={10}
                      classNames={{
                        input:
                          'h-10 border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338] mb-5',
                      }}
                    />
                  </Box>

                  {/* Body copy */}
                  <Box className="mb-7.5!">
                    <Group justify="space-between" mb={8}>
                      <Group gap={6}>
                        <Text
                          fw={600}
                          c="var(--mantine-color-text-primary)"
                          className="text-[13px]!"
                        >
                          Body copy
                        </Text>
                        <Text className="mt-0.5! text-[11px]! text-[#6B6E76]!">
                          {body.length}/{BODY_MAX}
                        </Text>
                      </Group>
                      <PunkIdeasBtn />
                    </Group>
                    <Textarea
                      value={body}
                      onChange={(e) =>
                        setBody(e.currentTarget.value.slice(0, BODY_MAX))
                      }
                      maxLength={BODY_MAX}
                      radius={10}
                      classNames={{
                        input:
                          'min-h-28! border border-[#313338]! bg-secondary-widget text-primary-text text-sm shadow-[inset_0_4px_0_rgba(0,0,0,0.04),0_1px_1.5px_rgba(44,54,53,0.025)] placeholder:text-secondary-text focus:border-[#313338]',
                      }}
                    />
                  </Box>

                  {/* ── Section 2: Campaign assets ── */}
                  <Group gap="xs" align="center" className="mb-5.75!">
                    <Badge
                      radius={7}
                      variant="filled"
                      bg="var(--color-secondary-widget)"
                      w={24}
                      h={24}
                      p={0}
                      style={{
                        border: '1px solid var(--color-stroke-widget)',
                      }}
                      className="text-[11px]! text-[#9B9EA6]!"
                    >
                      2
                    </Badge>
                    <Text
                      fw={700}
                      size="sm"
                      c="var(--mantine-color-text-primary)"
                    >
                      Campaign assets
                    </Text>
                    <Divider flex={1} color="#26282C" />
                  </Group>

                  {/* Dropzone */}
                  <Dropzone
                    onDrop={handleDrop}
                    accept={IMAGE_MIME_TYPE}
                    openRef={openRef}
                    radius={14}
                    styles={{
                      root: {
                        backgroundColor: 'transparent',
                        border: '2px dashed var(--mantine-color-divider)',
                        cursor: 'pointer',
                        '&:hover': {
                          borderColor: '#E91E8C',
                        },
                      },
                    }}
                    py="xl"
                    mb={9}
                  >
                    <Stack align="center" gap={2}>
                      <Group gap={4}>
                        <Text
                          c="var(--mantine-color-text-primary)"
                          fw={600}
                          className="text-[13px]!"
                        >
                          Drag files here or
                        </Text>
                        <Text
                          fw={600}
                          c="#E91E8C"
                          className="cursor-pointer! text-[13px]!"
                        >
                          browse
                        </Text>
                      </Group>
                      <Text className="text-xs! text-[#8B8E96]!">
                        We auto-sort by type — images, video & reels, documents.
                      </Text>
                    </Stack>
                  </Dropzone>

                  {/* Images section */}
                  {images.length > 0 && (
                    <Box mt={25} mb={9}>
                      <Group justify="space-between" mb="sm">
                        <Group gap={8}>
                          <Text
                            fw={700}
                            c="var(--mantine-color-primary-widget)"
                            fz={12}
                          >
                            Images
                          </Text>
                          <Badge
                            radius={7}
                            variant="filled"
                            bg="var(--color-secondary-widget)"
                            w={24}
                            h={24}
                            p={0}
                            style={{
                              border: '1px solid var(--color-stroke-widget)',
                            }}
                            className="text-[11px]! text-[#9B9EA6]!"
                          >
                            {images.length}
                          </Badge>
                        </Group>
                        <Text
                          size="xs"
                          c="var(--mantine-color-text-primary)"
                          fz={11}
                          style={{
                            cursor: 'pointer',
                            textDecoration: 'underline',
                          }}
                          onClick={() => setImagesExpanded(!imagesExpanded)}
                        >
                          {imagesExpanded ? 'Collapse' : 'Expand all'}
                        </Text>
                      </Group>

                      {imagesExpanded ? (
                        /* Expanded grid */
                        <Paper
                          p={12}
                          radius={12}
                          className="border border-[#2C2E33] bg-[#2D2D2D]"
                        >
                          <Flex gap={12} wrap="wrap">
                            {images.map((img) => (
                              <Box
                                key={img.id}
                                pos="relative"
                                w={100}
                                h={100}
                                style={{
                                  borderRadius: 'var(--mantine-radius-md)',
                                  overflow: 'hidden',
                                }}
                              >
                                {' '}
                                <Image
                                  src={img.url}
                                  alt={img.file.name}
                                  w="100%"
                                  h="100%"
                                  fit="cover"
                                />{' '}
                                <ActionIcon
                                  size="xs"
                                  variant="filled"
                                  bg="rgba(0,0,0,0.6)"
                                  pos="absolute"
                                  top={4}
                                  right={4}
                                  radius="xl"
                                  onClick={() => removeImage(img.id)}
                                  style={{ color: 'white' }}
                                >
                                  {' '}
                                  ×{' '}
                                </ActionIcon>{' '}
                              </Box>
                            ))}
                          </Flex>
                        </Paper>
                      ) : (
                        /* Collapsed summary */
                        <Paper
                          p={12}
                          radius={12}
                          className="border border-[#2C2E33] bg-[#2D2D2D]"
                        >
                          <Group gap={12} align="center" wrap="nowrap">
                            <Box className="h-12 w-12 shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={images[0]?.url}
                                alt="preview"
                                w="100%"
                                h="100%"
                                fit="cover"
                              />
                            </Box>

                            <Box className="flex-1">
                              <Text
                                fw={600}
                                className="text-primary-text! text-[13px]!"
                              >
                                {images.length} image
                                {images.length > 1 ? 's' : ''}
                              </Text>

                              <Text className="text-xs! text-[#8B8E96]!">
                                Tap to expand · select, drag to reorder first
                                image will be the Cover
                              </Text>
                            </Box>
                          </Group>
                        </Paper>
                      )}
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>

            <Divider mx={0} mb={16} color="#26282C" />
            {/* Bottom Actions */}
            <Box px={24} pb={14}>
              <Group gap="sm" wrap="nowrap">
                <SecondaryBtn w={120} h={42} radius="md">
                  Discard
                </SecondaryBtn>

                <PrimaryBtn flex={1} h={42} radius="md">
                  Upload content
                </PrimaryBtn>
              </Group>
            </Box>
          </Box>
        )}

        {/* ────── RIGHT PANEL: Live Preview ────── */}
        <Box
          h={isMobile ? 'auto' : '100%'}
          p="md"
          className="flex! min-w-0! flex-col! overflow-auto! border-t! border-l! border-[#26282C]! lg:border-t-0!"
        >
          {/* Preview Header */}
          <Group justify="space-between" mb={17} align="center">
            <Text fz={14} fw={700} c="var(--mantine-color-text-primary)">
              Live preview
            </Text>
            <Paper px={14} py={8} radius={8} className="bg-[#232427]">
              <Group gap={8} wrap="nowrap">
                <Text className="text-[10px]! uppercase!" c="#9B9EA6">
                  Facebook
                </Text>

                <Text c="#6B6E76" className="text-[10px]!">
                  •
                </Text>

                <Text className="text-[10px]! uppercase!" c="#9B9EA6">
                  Feed
                </Text>
              </Group>
            </Paper>
          </Group>

          {/* Preview Card */}
          {isMobile ? (
            <Box px={10}>
              <Paper maw={362} mx="auto" radius={12} mt={25} pt={13}>
                <Box px={15}>
                  {/* Header */}
                  <Group mb={14} justify="space-between" wrap="nowrap">
                    <Flex gap={10} wrap="nowrap" align="center">
                      <Box
                        w={40}
                        h={40}
                        className="flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#F54397_0%,#CE1C66_100%)]"
                      >
                        <Text
                          fw={700}
                          c="white"
                          className="text-[15px]! leading-none!"
                        >
                          A
                        </Text>
                      </Box>

                      <Box>
                        <Text
                          fw={700}
                          className="text-primary-text! text-[13px]! leading-none!"
                        >
                          Aurora Brand
                        </Text>

                        <Text className="text-[11px]! leading-none! text-[#8B8E96]!">
                          Sponsored ·{' '}
                          <Text span c="#E91E8C" fz={11}>
                            Punk Ai
                          </Text>
                        </Text>
                      </Box>
                    </Flex>

                    <ActionIcon variant="subtle" color="#8B8E96" size="sm">
                      <MoreHorizontal size={16} />
                    </ActionIcon>
                  </Group>

                  {/* Body */}
                  <Box pb={13}>
                    <Text
                      className="text-primary-text! text-[13px]! leading-[1.45]!"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {body || (
                        <Text span className="text-secondary-text! italic">
                          Meet the Spring lineup — engineered for everyday
                          performance and designed to turn heads. Limited drops,
                          premium materials, and free shipping on every order.
                        </Text>
                      )}
                    </Text>
                  </Box>
                </Box>

                {/* Image */}
                <Box
                  h={360}
                  className="flex items-center justify-center overflow-hidden bg-linear-to-b from-[#3C486A] to-[#29314A]"
                >
                  {images.length > 0 ? (
                    <Image
                      src={images[0].url}
                      alt="Preview"
                      w="100%"
                      h="100%"
                      fit="cover"
                      px={0}
                    />
                  ) : (
                    <Text className="text-[12px]! tracking-[0.12em]! text-[#D6D8E0]!">
                      IMG_01
                    </Text>
                  )}
                </Box>

                {/* Footer */}
                <Flex
                  px={15}
                  py={12}
                  align="center"
                  justify="space-between"
                  gap={10}
                >
                  <Box flex={1} miw={0}>
                    <Text className="text-[10px]! tracking-[0.12em]! text-[#8B8E96]! uppercase!">
                      AURORABRAND.COM
                    </Text>

                    <Text
                      fw={700}
                      lineClamp={2}
                      className="text-primary-text! mt-0.5! text-[13px]! leading-tight!"
                    >
                      {headline || (
                        <Text
                          fw={700}
                          fz={13}
                          span
                          className="text-secondary-text!"
                        >
                          New season, new standards.
                        </Text>
                      )}
                    </Text>
                  </Box>

                  <SecondaryBtn
                    h={36}
                    radius={8}
                    px={6}
                    variant="filled"
                    classNames={{
                      label: 'text-[10px] text-primary-text',
                    }}
                  >
                    {cta || 'Shop the Spring drop'}
                  </SecondaryBtn>
                </Flex>
              </Paper>
            </Box>
          ) : (
            <Box className="flex! flex-1! justify-center! py-10!" px={10}>
              <Paper maw={362} mx="auto" radius={12} pt={13}>
                <Box px={15}>
                  {/* Header */}
                  <Group mb={14} justify="space-between" wrap="nowrap">
                    <Flex gap={10} wrap="nowrap" align="center">
                      <Box
                        w={40}
                        h={40}
                        className="flex items-center justify-center rounded-full bg-[linear-gradient(180deg,#F54397_0%,#CE1C66_100%)]"
                      >
                        <Text
                          fw={700}
                          c="white"
                          className="text-[15px]! leading-none!"
                        >
                          A
                        </Text>
                      </Box>

                      <Box>
                        <Text
                          fw={700}
                          className="text-primary-text! text-[13px]! leading-none!"
                        >
                          Aurora Brand
                        </Text>

                        <Text className="text-[11px]! leading-none! text-[#8B8E96]!">
                          Sponsored ·{' '}
                          <Text span c="#E91E8C" fz={11}>
                            Punk Ai
                          </Text>
                        </Text>
                      </Box>
                    </Flex>

                    <ActionIcon variant="subtle" color="#8B8E96" size="sm">
                      <MoreHorizontal size={16} />
                    </ActionIcon>
                  </Group>

                  {/* Body */}
                  <Box pb={13}>
                    <Text
                      className="text-primary-text! text-[13px]! leading-[1.45]!"
                      style={{ wordBreak: 'break-word' }}
                    >
                      {body || (
                        <Text span className="text-secondary-text! italic">
                          Meet the Spring lineup — engineered for everyday
                          performance and designed to turn heads. Limited drops,
                          premium materials, and free shipping on every order.
                        </Text>
                      )}
                    </Text>
                  </Box>
                </Box>

                {/* Image */}
                <Box
                  h={360}
                  className="flex items-center justify-center overflow-hidden bg-linear-to-b from-[#3C486A] to-[#29314A]"
                >
                  {images.length > 0 ? (
                    <Image
                      src={images[0].url}
                      alt="Preview"
                      w="100%"
                      h="100%"
                      fit="cover"
                      px={0}
                    />
                  ) : (
                    <Text className="text-[12px]! tracking-[0.12em]! text-[#D6D8E0]!">
                      IMG_01
                    </Text>
                  )}
                </Box>

                {/* Footer */}
                <Flex
                  px={15}
                  py={12}
                  align="center"
                  justify="space-between"
                  gap={10}
                >
                  <Box flex={1} miw={0}>
                    <Text className="text-[10px]! tracking-[0.12em]! text-[#8B8E96]! uppercase!">
                      AURORABRAND.COM
                    </Text>

                    <Text
                      fw={700}
                      lineClamp={2}
                      className="text-primary-text! mt-0.5! text-[13px]! leading-tight!"
                    >
                      {headline || (
                        <Text
                          fw={700}
                          fz={13}
                          span
                          className="text-secondary-text!"
                        >
                          New season, new standards.
                        </Text>
                      )}
                    </Text>
                  </Box>

                  <SecondaryBtn
                    h={36}
                    radius={8}
                    variant="filled"
                    classNames={{
                      label: 'text-[12px] font-bold text-primary-text',
                    }}
                  >
                    {cta || 'Shop the Spring drop'}
                  </SecondaryBtn>
                </Flex>
              </Paper>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

/* ─── Punk Ideas Button ─────────────────────────────────────── */
function PunkIdeasBtn() {
  return (
    <PrimaryBtn
      fw={600}
      className="text-primary-text! rounded-full! border! border-[#F54397]! bg-[#F54397]/8! text-xs! shadow-none! hover:bg-[#F54397]/12!"
    >
      Punk ideas
    </PrimaryBtn>
  )
}
