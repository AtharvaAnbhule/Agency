"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal, Code, FileText, LayoutDashboard, Settings, GitBranch, Folder, RefreshCw, Play, Square, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export default function CodeEditorPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  const [activeTab, setActiveTab] = useState('index');
  const [branch, setBranch] = useState('main');
  const [isCompiling, setIsCompiling] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // 3D transform effects
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);

  // Simulate terminal output
  useEffect(() => {
    const messages = [
      'Compiling components...',
      'Generating types...',
      'Checking lint rules...',
      'Compilation completed successfully!',
      'Ready on http://localhost:3000'
    ];
    
    if (isCompiling) {
      setTerminalOutput([]);
      setIsRunning(true);
      messages.forEach((msg, i) => {
        setTimeout(() => {
          setTerminalOutput(prev => [...prev, msg]);
        }, i * 800);
      });
      
      setTimeout(() => {
        setIsCompiling(false);
        setIsRunning(false);
      }, messages.length * 800);
    }
  }, [isCompiling]);

  // Toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  return (
    <div className={cn(
      "bg-gray-950 overflow-hidden relative flex items-center justify-center",
      isFullscreen ? "fixed inset-0 z-50" : "min-h-screen py-4 px-2 md:px-4"
    )}>
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            backgroundImage: `
              linear-gradient(
                45deg,
                transparent 75%,
                rgba(126, 34, 206, 0.03) 85%,
                transparent 95%
              )
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <motion.div
        ref={containerRef}
        style={{ rotateX, scale }}
        className={cn(
          "perspective-1000 origin-center bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden border border-gray-700/50 flex flex-col",
          isFullscreen ? "h-screen w-screen" : "h-[85vh] w-full max-w-6xl mx-auto"
        )}
      >
        {/* Top Bar */}
        <div className="bg-gray-900/90 border-b border-gray-700/50 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <Button 
              variant="ghost" 
              size="xs" 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={toggleMobileSidebar}
            >
              <LayoutDashboard className="h-4 w-4" />
            </Button>
            <div className="text-xs font-mono text-purple-300 flex items-center">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500/70"></span>
              </span>
              NEXBIT
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="xs" className="text-purple-300 hover:text-white bg-gray-800/70 hover:bg-gray-700/70 px-2">
                    <GitBranch className="h-3 w-3 mr-1.5" />
                    <span className="font-mono text-xs">{branch}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border border-gray-700 text-purple-100 text-xs">Change branch</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="xs" 
              className={cn(
                "bg-purple-600/90 hover:bg-purple-700/90 text-white px-2 md:px-3",
                isRunning && "bg-emerald-600/90 hover:bg-emerald-700/90"
              )}
              onClick={() => setIsCompiling(true)}
            >
              {isRunning ? (
                <Square className="h-3 w-3 md:mr-1.5" />
              ) : (
                <Play className="h-3 w-3 md:mr-1.5" />
              )}
              <span className="hidden md:inline text-xs">{isRunning ? "Stop" : "Run"}</span>
            </Button>
            <Button 
              variant="outline" 
              size="xs" 
              className="text-purple-300 bg-gray-800/70 hover:bg-gray-700/70 hover:text-white border-gray-700/50 px-2"
              onClick={() => {
                setIsTyping(true);
                setTerminalOutput([]);
              }}
            >
              <RefreshCw className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="xs"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Main Content */}
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          {/* Sidebar - Mobile */}
          {mobileSidebarOpen && (
            <div className="fixed inset-0 z-40 md:hidden" onClick={toggleMobileSidebar}>
              <div className="absolute inset-0 bg-black/50" />
              <div 
                className="absolute left-0 top-0 h-full w-64 bg-gray-900/95 border-r border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <ScrollArea className="h-full">
                  <div className="p-2 space-y-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-start text-purple-300 hover:bg-gray-800/70 hover:text-white"
                      onClick={toggleMobileSidebar}
                    >
                      <LayoutDashboard className="h-4 w-4 mr-2" />
                      Explorer
                    </Button>
                    
                    <div className="mt-4">
                      <div className="text-xs font-medium text-purple-300/60 px-2 mb-1">PROJECT</div>
                      <div className="space-y-1">
                        <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:bg-gray-800/70 hover:text-white">
                          <FileText className="h-4 w-4 mr-2" />
                          README.md
                        </Button>
                        <Button 
                          variant={activeTab === 'index' ? 'secondary' : 'ghost'} 
                          size="sm" 
                          className="w-full justify-start hover:bg-gray-800/70 hover:text-white"
                          onClick={() => {
                            setActiveTab('index');
                            setMobileSidebarOpen(false);
                          }}
                        >
                          <Code className="h-4 w-4 mr-2" />
                          Index.vue
                        </Button>
                      </div>
                      
                      <div className="text-xs font-medium text-purple-300/60 px-2 mt-4 mb-1">RESOURCES</div>
                      <div className="space-y-1">
                        {['fonts', 'images', 'css', 'js', 'Pages', 'Auth'].map((folder) => (
                          <Button 
                            key={folder} 
                            variant="ghost" 
                            size="sm" 
                            className="w-full justify-start text-gray-300 hover:bg-gray-800/70 hover:text-white"
                          >
                            <Folder className="h-4 w-4 mr-2 text-purple-300/60" />
                            {folder}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}

          {/* Sidebar - Desktop */}
          <ResizablePanel 
            defaultSize={15} 
            minSize={10} 
            className={cn(
              "bg-gray-900/80 border-r border-gray-700/50 hidden md:block",
              mobileSidebarOpen ? "hidden" : "block"
            )}
          >
            <ScrollArea className="h-full">
              <div className="p-1.5 space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start text-purple-300 hover:bg-gray-800/70 hover:text-white px-2">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  <span className="text-sm">Explorer</span>
                </Button>
                
                <div className="mt-3">
                  <div className="text-xs font-medium text-purple-300/60 px-2 mb-1">PROJECT</div>
                  <div className="space-y-1">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-gray-300 hover:bg-gray-800/70 hover:text-white px-2">
                      <FileText className="h-4 w-4 mr-2" />
                      <span className="text-sm">README.md</span>
                    </Button>
                    <Button 
                      variant={activeTab === 'index' ? 'secondary' : 'ghost'} 
                      size="sm" 
                      className="w-full justify-start hover:bg-gray-800/70 hover:text-white px-2"
                      onClick={() => setActiveTab('index')}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      <span className="text-sm">Index.vue</span>
                    </Button>
                  </div>
                  
                  <div className="text-xs font-medium text-purple-300/60 px-2 mt-3 mb-1">RESOURCES</div>
                  <div className="space-y-1">
                    {['fonts', 'images', 'css', 'js', 'Pages', 'Auth'].map((folder) => (
                      <Button 
                        key={folder} 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-start text-gray-300 hover:bg-gray-800/70 hover:text-white px-2"
                      >
                        <Folder className="h-4 w-4 mr-2 text-purple-300/60" />
                        <span className="text-sm">{folder}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </ResizablePanel>
          
          <ResizableHandle withHandle className="bg-gray-700/30 hover:bg-purple-500/30 transition-colors hidden md:block" />
          
          {/* Editor Area */}
          <ResizablePanel defaultSize={60} className="bg-gray-800/90">
            <Tabs defaultValue="index" value={activeTab} onValueChange={setActiveTab}>
              <div className="border-b border-gray-700/50">
                <TabsList className="bg-transparent h-8">
                  <TabsTrigger 
                    value="index" 
                    className="data-[state=active]:bg-gray-700/50 data-[state=active]:text-purple-300 text-gray-400 text-xs px-3 h-7"
                  >
                    Index.vue
                  </TabsTrigger>
                  <TabsTrigger 
                    value="config" 
                    className="data-[state=active]:bg-gray-700/50 data-[state=active]:text-purple-300 text-gray-400 text-xs px-3 h-7"
                  >
                    wind.config.js
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="index" className="m-0 h-[calc(100%-32px)]">
                <ScrollArea className="h-full">
                  <div className="p-3 font-mono text-xs md:text-sm">
                    <CodeEditor isTyping={isTyping} setIsTyping={setIsTyping} />
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="config" className="m-0 h-[calc(100%-32px)]">
                <ScrollArea className="h-full">
                  <div className="p-3 font-mono text-xs md:text-sm">
                    <ConfigEditor />
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          
          <ResizableHandle withHandle className="bg-gray-700/30 hover:bg-purple-500/30 transition-colors hidden md:block" />
          
          {/* Terminal/Output */}
          <ResizablePanel defaultSize={25} minSize={15} className="bg-gray-900/80 border-l border-gray-700/50 flex flex-col">
            <div className="border-b border-gray-700/50 px-3 py-1.5 flex items-center justify-between h-8">
              <div className="text-xs font-medium text-purple-300">TERMINAL</div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-[0.65rem] bg-gray-800/70 border-gray-700/50 text-purple-300 px-1.5">bash</Badge>
              </div>
            </div>
            
            <ScrollArea className="flex-1 p-3">
              <div className="font-mono text-xs md:text-sm text-gray-300 space-y-1.5">
                {terminalOutput.length > 0 ? (
                  terminalOutput.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start"
                    >
                      <span className="text-purple-300 mr-1.5">$</span>
                      <span>{line}</span>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-gray-500 text-xs md:text-sm">Run the project to see output...</div>
                )}
              </div>
            </ScrollArea>
            
            <div className="border-t border-gray-700/50 p-1.5">
              <div className="flex items-center">
                <span className="text-purple-300 mr-1.5 font-mono text-xs md:text-sm">$</span>
                <Input 
                  type="text" 
                  placeholder="Enter command..." 
                  className="flex-1 bg-gray-800/70 border-gray-700/50 text-gray-300 font-mono text-xs md:text-sm h-7 focus:ring-1 focus:ring-purple-500/30"
                />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </motion.div>
    </div>
  );
}

function CodeEditor({ isTyping, setIsTyping }: { isTyping: boolean; setIsTyping: (value: boolean) => void }) {
  const code = `// Index.vue
<template>
  <div>
    <NavBar />
    <HeroSection />
    <FeaturesGrid />
    <CallToAction />
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import NavBar from '@/Components/NavBar.vue'
import HeroSection from '@/Components/HeroSection.vue'
import FeaturesGrid from '@/Components/FeaturesGrid.vue'
import CallToAction from '@/Components/CallToAction.vue'
import Footer from '@/Components/Footer.vue'

const pageTitle = ref('Leading Web Development and UI/UX Design Agency')

// Set page title using Inertia
Inertia.page.title = pageTitle.value
</script>`;

  const [displayedCode, setDisplayedCode] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const lines = code.split('\n');

  useEffect(() => {
    if (!isTyping) {
      setDisplayedCode(code);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';
    const typingSpeed = 10 + Math.random() * 20;

    const typeNextChar = () => {
      if (lineIndex >= lines.length) {
        setIsTyping(false);
        return;
      }

      if (charIndex < lines[lineIndex].length) {
        currentText += lines[lineIndex][charIndex];
        charIndex++;
        setDisplayedCode(currentText + (lineIndex < lines.length - 1 ? '\n' : ''));
        setTimeout(typeNextChar, typingSpeed);
      } else {
        currentText += '\n';
        lineIndex++;
        charIndex = 0;
        setCurrentLine(lineIndex);
        setTimeout(typeNextChar, 100);
      }
    };

    const timer = setTimeout(typeNextChar, 500);

    return () => clearTimeout(timer);
  }, [isTyping, code, setIsTyping]);

  const displayedLines = displayedCode.split('\n');

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-6 text-right text-gray-500 select-none">
        {Array.from({ length: Math.max(lines.length, displayedLines.length) }).map((_, i) => (
          <div 
            key={i} 
            className={cn(
              "pr-1 text-[0.65rem]",
              i === currentLine && isTyping ? "text-purple-200 bg-gray-700/30" : "text-gray-500"
            )}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="pl-8">
        {displayedLines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap relative">
            {line.split('').map((char, j) => (
              <motion.span
                key={j}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="text-xs md:text-sm"
              >
                {char}
              </motion.span>
            ))}
            {i === currentLine && isTyping && (
              <motion.span
                className="absolute bottom-0 w-1.5 h-4 bg-purple-200 opacity-70"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              />
            )}
          </div>
        ))}
        {isTyping && (
          <motion.div
            className="whitespace-pre-wrap text-gray-500 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Array(lines.length - displayedLines.length).fill('').map((_, i) => (
              <div key={i}>&nbsp;</div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ConfigEditor() {
  const code = `// wind.config.js
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(126, 34, 206)',
          light: 'rgb(147, 51, 234)',
          dark: 'rgb(107, 33, 168)'
        }
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
        'ray-pulse': 'ray-pulse 8s ease-in-out infinite'
      }
    }
  }
}`;

  const lines = code.split('\n');
  
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-full w-6 text-right text-gray-500 select-none">
        {lines.map((_, i) => (
          <div key={i} className="pr-1 text-[0.65rem] text-gray-500">{i + 1}</div>
        ))}
      </div>
      <div className="pl-8">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap text-xs md:text-sm">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}